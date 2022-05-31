import React from "react";
import PropTypes from "prop-types";

import { Container } from "../../UI-utils";

export const PokemonDashboardTable = ({ Header, Filters, children }) => {
  return (
    <Container extendedStyles="display: flex; flex-direction: column; padding: 2rem; ">
      {Header}
      {Filters}
      {children}
    </Container>
  );
};

PokemonDashboardTable.propTypes = {
  title: PropTypes.string.isRequired,
  Filters: PropTypes.object.isRequired,
  Header: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};
