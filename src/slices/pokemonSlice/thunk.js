import {
  setPokemons,
  setPages,
  setPage,
  setIsLoading,
  pokemonSlice,
  setSearch,
} from "./pokemonSlice";

function paginate(array, page_size, page_number, length) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const getPokemons = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setIsLoading({ isLoading: true }));
      const { pokemons, ui } = getState();
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
      const data = await resp.json();

      const filteredNames = data.results.filter((pokemon) => {
        if (pokemons.search) {
          return pokemon.name.includes(pokemons.search);
        } else {
          return true;
        }
      });

      const pages = Math.round(filteredNames.length / 16);
      dispatch(setPages({ pages }));
      dispatch(setPage({ page }));

      const filteredPokemons = paginate(filteredNames, 16, page, pages);

      const promises = filteredPokemons.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const data = await pokemonResponse.json();
        return data;
      });

      const results = await Promise.all(promises);

      if (ui.grid) {
        dispatch(
          setPokemons({
            pokemons: [...pokemons.pokemons, ...results],
          })
        );
      } else {
        dispatch(setPokemons({ pokemons: [...results] }));
      }

      dispatch(setIsLoading({ isLoading: false }));
    } catch (err) {}
  };
};

export const setPokemonSearch = (value) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setPokemons({ ...pokemonSlice.getInitialState() }));
      dispatch(setSearch({ search: value }));
      dispatch(getPokemons(1));
    } catch (err) {}
  };
};
