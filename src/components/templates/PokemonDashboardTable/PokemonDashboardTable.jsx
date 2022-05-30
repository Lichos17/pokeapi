import React from "react";
import { Text } from "../../atoms";
import { Pagination, PokemonCard } from "../../molecules";
import { Container, Grid } from "../../UI-utils";
import PropTypes from "prop-types";

export const PokemonDashboardTable = ({ title, Filters, children }) => {
  return (
    <Container extendedStyles="display: flex; flex-direction: column;">
      <Text weight="bold" as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        {title}
      </Text>
      {Filters}
      {children}
    </Container>
  );
};

PokemonDashboardTable.propTypes = {
  title: PropTypes.string.isRequired,
  Filters: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};
