import { setPokemons, setPages } from "./pokemonSlice";
function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const getPokemons = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const { pokemons } = getState();
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
      const data = await resp.json();
      const filteredNames = data.results.filter((pokemon) => {
        if (pokemons.search) {
          return pokemon.name.includes(pokemons.search);
        } else {
          return true;
        }
      });

      const pages = Math.round(filteredNames.length / 9);
      dispatch(setPages({ pages }));

      const filteredPokemons = paginate(filteredNames, pokemons.limit, page);
      // for (let index = 0; index < 125; index++) {
      //   const filteredPokemons = paginate(filteredNames, 9, index + 1);
      //   console.log(filteredPokemons);
      //   console.log(index);
      // }

      const promises = filteredPokemons.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const data = await pokemonResponse.json();
        return data;
      });
      const results = await Promise.all(promises);
      dispatch(setPokemons({ pokemons: results, page: page }));
    } catch (err) {}
  };
};
