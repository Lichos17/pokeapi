import styled from "styled-components";

export const TableBodyContainer = styled.tbody`
  width: 100%;
  background-color: ${(props) => props.theme.table.bgPrimary};
  & tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.table.bgSecondary};
  }
`;
