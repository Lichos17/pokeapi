import React from "react";
import PropTypes from "prop-types";

import { TableBodyItems } from "../../molecules";
import { TableBodyContainer } from "../../UI-utils";

export const TableBody = ({ pokemons }) => {
  return (
    <TableBodyContainer>
      {pokemons.map((pokemon) => (
        <TableBodyItems
          id={pokemon.id}
          key={pokemon.id}
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
