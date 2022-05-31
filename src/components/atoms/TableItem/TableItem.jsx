import styled from "styled-components";
import PropTypes from "prop-types";

export const TableItem = styled.td`
  vertical-align: middle;
  padding: 1rem 0;
  text-align: left;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  valign: top;
  width: 250px;
  border-bottom: 1px solid ${(props) => props.theme.table.borders};
  border-top: 1px solid ${(props) => props.theme.table.borders};

  color: ${(props) => props.theme.table.color};

  &:first-of-type {
    padding-left: 3rem;
    border-left: 1px solid ${(props) => props.theme.table.borders};
  }

  &:nth-last-child(2) {
    padding-right: 3rem;
    border-right: 1px solid ${(props) => props.theme.table.borders};
  }

  &:last-of-type {
    border: none;
    background-color: ${(props) => props.theme.body};
    text-align: center;
    width: 150px;
  }
  ${(props) => props.extendedStyles && props.extendedStyles}
`;

TableItem.propTypes = {
  extendedStyles: PropTypes.string,
};
