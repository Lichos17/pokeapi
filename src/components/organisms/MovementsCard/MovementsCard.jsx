import React from "react";
import styledComponents from "styled-components";
import { Text } from "../../atoms";
import { MovementsRow } from "../../molecules";

export const MovementsCardContainer = styledComponents.article`
  border: 1px solid #47525E;
  padding: 1.5rem;
  width: calc(30% - 1rem);
  margin-left: 1rem;

  background-color: ${(props) => props.theme.card.bg};
  border: 1px solid ${(props) => props.theme.card.borders};

  @media(max-width:480px){width: 100%;  margin-left: 0rem;}
`;

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
