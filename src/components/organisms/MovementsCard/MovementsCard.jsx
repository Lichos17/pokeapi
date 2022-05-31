import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../atoms";
import { MovementsRow } from "../../molecules";
import { MovementsCardContainer } from "../../UI-utils";

export const MovementsCard = ({ moves }) => {
  return (
    <MovementsCardContainer>
      <Text extendedStyles="margin-bottom: 1rem;" as="h3">
        Movimientos
      </Text>
      {moves.map((move, i) => (
        <MovementsRow
          key={move.id}
          power={move.power}
          precisition={move.accuracy}
          type={move.type.name}
          index={i}
        />
      ))}
      <MovementsRow />
      <MovementsRow />
      <MovementsRow />
    </MovementsCardContainer>
  );
};

MovementsCard.propTypes = {
  moves: PropTypes.array.isRequired,
};
