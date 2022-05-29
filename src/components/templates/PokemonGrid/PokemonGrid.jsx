import React from "react";
import { Text } from "../../atoms";
import { Pagination, PokemonCard } from "../../molecules";
import { Container, Grid } from "../../UI-utils";

export const PokemonGrid = ({ title, Filters, Body }) => {
  return (
    <Container>
      <Text as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        {title}
      </Text>
      <Filters />
      <Body />
    </Container>
  );
};

PokemonGrid.propTypes = {
  title: Proptypes.string.isRequired,
  Filters: Proptypes.func.isRequired,
  Body: Proptypes.func.isRequired,
};
