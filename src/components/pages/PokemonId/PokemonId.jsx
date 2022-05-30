import React from "react";
import { InfoCard } from "../../molecules";
import { MovementsCard } from "../../organisms";
import { PokemonModal } from "../../templates";

export const PokemonId = () => {
  return (
    <PokemonModal
      firstColumn={
        <>
          <InfoCard
            type1="Tipo"
            type2="Tipo"
            description="Test"
            name="Pikachu"
          />
          <InfoCard
            type1="Tipo"
            type2="Tipo"
            description="Test"
            name="Pikachu"
          />
        </>
      }
      secondColumn={<MovementsCard />}
    />
  );
};
