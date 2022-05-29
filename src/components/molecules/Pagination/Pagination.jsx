import React from "react";
import styledComponents from "styled-components";
import { Button } from "../../atoms";
import PropTypes from "prop-types";

const PaginationContainer = styledComponents.div`
  display: flex;
  align-items:center;

  ${(props) => props.extendedStyles && props.extendedStyles}

  & a:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & a:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const Pagination = ({ pages, extendedStyles }) => {
  return (
    <PaginationContainer extendedStyles={extendedStyles}>
      {pages &&
        Array.from(Array(pages).keys()).map((page) => (
          <Button key={page} size="xs" buttonType="navButton">
            {page + 1}
          </Button>
        ))}
    </PaginationContainer>
  );
};

Pagination.defaultProps = {
  pages: 1,
};

Pagination.propTypes = {
  extendedStyles: PropTypes.string,
  pages: PropTypes.number,
};

PaginationContainer.propTypes = {
  extendedStyles: PropTypes.string,
};
