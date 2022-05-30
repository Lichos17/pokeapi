import React from "react";
import styledComponents from "styled-components";
import { Button } from "../../atoms";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";
import { getPokemons, setPage } from "../../../slices";

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

export const Pagination = ({ currentPage, pages, extendedStyles }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigationPage = (page) => {
    dispatch(getPokemons(page));
  };

  return (
    <PaginationContainer extendedStyles={extendedStyles}>
      {pages &&
        Array.from(Array(10).keys()).map((page) => (
          <Button
            onClick={() => handleNavigationPage(page + currentPage)}
            key={page + currentPage}
            size="xs"
            buttonType="navButton"
          >
            {currentPage + page}
          </Button>
        ))}
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

PaginationContainer.propTypes = {
  extendedStyles: PropTypes.string,
};
