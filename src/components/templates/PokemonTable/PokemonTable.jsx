import React from "react";
import { Text } from "../../atoms";
import { Pagination } from "../../molecules";
import { Container } from "../../UI-utils";
import PropTypes from "prop-types";

export const PokemonTable = ({ title, Filters, Body }) => {
  return (
    <Container extendedStyles="display: flex; flex-direction: column;">
      <Text as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        {title}
      </Text>
      {Filters}
      {Body}
      <Pagination extendedStyles="margin-top: 2rem; align-self:center;" />
    </Container>
  );
};

PokemonTable.propTypes = {
  title: PropTypes.string.isRequired,
  Filters: PropTypes.func.isRequired,
  Body: PropTypes.func.isRequired,
};
