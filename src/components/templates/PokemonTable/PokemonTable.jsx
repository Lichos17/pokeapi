import React from "react";
import { Text } from "../../atoms";
import { Pagination } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { Container } from "../../UI-utils";

export const PokemonTable = ({}) => {
  return (
    <Container extendedStyles="display: flex; flex-direction: column;">
      <Text as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        Pokédex
      </Text>
      <Filters />
      <table>
        <TableHead />
        <TableBody />
      </table>
      <Pagination extendedStyles="margin-top: 2rem; align-self:center;" />
    </Container>
  );
};

PokemonTable.propTypes = {};
