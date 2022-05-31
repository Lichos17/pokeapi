import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getPokemons } from "../../../slices";
import { PaginationContainer } from "../../UI-utils";
import { Button } from "../../atoms";

export const Pagination = ({ currentPage, pages, extendedStyles }) => {
  const dispatch = useDispatch();
  const handleNavigationPage = (page) => {
    dispatch(getPokemons(page));
  };

  return (
    <PaginationContainer extendedStyles={extendedStyles}>
      {pages &&
        Array.from(Array(10).keys()).map((page) => {
          if (page + currentPage - 1 > 0 && page + currentPage - 1 <= pages) {
            return (
              <Button
                onClick={() => handleNavigationPage(page + currentPage - 1)}
                key={page + currentPage - 1}
                size="xs"
                buttonType="navButton"
              >
                {currentPage + page - 1}
              </Button>
            );
          }
        })}
    </PaginationContainer>
  );
};

Pagination.defaultProps = {
  pages: 1,
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  extendedStyles: PropTypes.string,
  pages: PropTypes.number,
};
