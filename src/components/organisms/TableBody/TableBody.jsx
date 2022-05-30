import React from "react";
import styled from "styled-components";
import { TableItem } from "../../atoms";
import PropTypes from "prop-types";
import { TableBodyItems } from "../../molecules";

const TableBodyContainer = styled.tbody`
  width: 100%;
  background-color: ${(props) => props.theme.table.bgPrimary};
  & tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.table.bgSecondary};
  }
`;

export const TableBody = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <TableBodyContainer>
      {pokemons.map((pokemon) => (
        <TableBodyItems
          key={pokemon.name}
          pokemonName={pokemon.name}
          abilities={pokemon.abilities}
          types={pokemon.types}
          src={pokemon.sprites.front_default}
        />
      ))}
    </TableBodyContainer>
  );
};

TableBody.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};
