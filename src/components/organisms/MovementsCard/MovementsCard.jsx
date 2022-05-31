import React from "react";

import { Text } from "../../atoms";
import { MovementsRow } from "../../molecules";
import { MovementsCardContainer } from "../../UI-utils";

export const MovementsCard = () => {
  return (
    <MovementsCardContainer>
      <Text extendedStyles="margin-bottom: 1rem;" as="h3">
        Movimientos
      </Text>
      <MovementsRow />
      <MovementsRow />
      <MovementsRow />
    </MovementsCardContainer>
  );
};
