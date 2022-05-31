import React from "react";
import { useParams } from "react-router-dom";

import { PokemonModal } from "../../templates";
import { usePokemonFetch } from "../../../hooks";

export const PokemonImages = () => {
  const { id } = useParams();
  const { pokemon } = usePokemonFetch(id);

  return pokemon ? (
    <PokemonModal
      images={
        [pokemon.sprites.front_default, pokemon.sprites.front_shiny] || []
      }
    />
  ) : (
    <h1>Loading</h1>
  );
};
