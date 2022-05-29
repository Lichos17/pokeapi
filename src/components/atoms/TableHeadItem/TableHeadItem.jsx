import styled from "styled-components";
import PropTypes from "prop-types";

export const TableHeadItem = styled.th`
  text-align: left;
  padding: 3rem 0;
  font-weight: 700;
  font-size: 1rem;
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
    width: 150px;
  }
  ${(props) => props.extendedStyles && props.extendedStyles}
`;

TableHeadItem.propTypes = {
  extendedStyles: PropTypes.string,
};
