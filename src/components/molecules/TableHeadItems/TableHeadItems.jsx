import React from "react";
import styled from "styled-components";
import { TableHeadItem } from "../../atoms";

export const TableHeadItems = () => {
  return (
    <tr>
      <TableHeadItem>#</TableHeadItem>
      <TableHeadItem>Nombre</TableHeadItem>
      <TableHeadItem>Vista Previa</TableHeadItem>
      <TableHeadItem>Tipos</TableHeadItem>
      <TableHeadItem>Habilidades</TableHeadItem>
      <TableHeadItem></TableHeadItem>
    </tr>
  );
};
