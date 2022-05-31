import styled from "styled-components";
import PropTypes from "prop-types";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;

  ${(props) => props.extendedStyles && props.extendedStyles}

  & a:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
PaginationContainer.propTypes = {
  extendedStyles: PropTypes.string,
};
