import React, { useEffect, useState } from "react";

export const usePokemonFetch = (id) => {
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await resp.json();

      const promises = data.abilities.map(async ({ ability }) => {
        const resp = await fetch(ability.url);
        const data = await resp.json();
        return data;
      });
      const results = await Promise.all(promises);
      setPokemon(data);
      setAbilities(results);
    };

    fetching();
  }, []);

  return { pokemon, setPokemon, abilities, setAbilities };
};
