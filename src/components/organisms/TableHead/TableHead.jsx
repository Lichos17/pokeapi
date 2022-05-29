import React from "react";
import styled from "styled-components";
import { TableHeadItems } from "../../molecules";

const HeaderContainer = styled.thead`
  background-color: ${(props) => props.theme.table.header};
`;

export const TableHead = () => {
  return (
    <HeaderContainer>
      <TableHeadItems />
    </HeaderContainer>
  );
};
