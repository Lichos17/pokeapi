import React, { useEffect, useState } from "react";

export const usePokemonFetch = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [movesState, setMovesState] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await resp.json();

      const promises = data.abilities.map(async ({ ability }) => {
        const resp = await fetch(ability.url);
        const data = await resp.json();
        return data;
      });
      const movesArray = Array.from(Array(10).keys()).map((i) => data.moves[i]);
      const movesPromises = movesArray.map(async ({ move }) => {
        const resp = await fetch(move.url);
        const data = await resp.json();
        return data;
      });
      const moves = await Promise.all(movesPromises);

      const results = await Promise.all(promises);
      setMovesState(moves);
      setPokemon(data);
      setAbilities(results);
    };

    fetching();
  }, []);

  return {
    pokemon,
    setPokemon,
    abilities,
    setAbilities,
    movesState,
    setMovesState,
  };
};
