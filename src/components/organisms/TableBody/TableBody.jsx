import React from "react";
import styled from "styled-components";
import { TableBodyItems } from "../../molecules";

const TableBodyContainer = styled.tbody`
  width: 100%;
  background-color: ${(props) => props.theme.table.bgPrimary};
  & tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.table.bgSecondary};
  }
`;

export const TableBody = () => {
  return (
    <TableBodyContainer>
      <TableBodyItems
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg"
        abilities={["Habilidad", "Habilidad", "Habilidad"]}
        types={["Tipo", "Tipo"]}
        pokemonName="Lichonsky"
      />
      <TableBodyItems />
      <TableBodyItems />
      <TableBodyItems />
    </TableBodyContainer>
  );
};
