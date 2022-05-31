import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Text } from "../../atoms";
import { InfoCard } from "../../molecules";
import { MovementsCard } from "../../organisms";
import { PokemonModal } from "../../templates";
import { usePokemonFetch } from "../../../hooks";

export const PokemonId = () => {
  const { id } = useParams();
  const { pokemon, abilities, setPokemon, setAbilities } = usePokemonFetch(id);

  return pokemon && abilities ? (
    <PokemonModal
      firstColumn={
        <>
          <InfoCard types={pokemon.types} name={pokemon.name}>
            Description
          </InfoCard>
          <InfoCard description="Test" name="Habilidades">
            {abilities &&
              abilities.map((ability) => (
                <Text
                  extendedStyles="color: gray; margin: 1rem 0;"
                  as="p"
                  size="sm"
                  key={ability.id}
                >
                  {ability.name}: {ability.effect_entries[0].short_effect}
                </Text>
              ))}
          </InfoCard>
        </>
      }
      secondColumn={<MovementsCard />}
      images={
        [pokemon.sprites.front_default, pokemon.sprites.front_shiny] || []
      }
    />
  ) : (
    <h1>Loading</h1>
  );
};
