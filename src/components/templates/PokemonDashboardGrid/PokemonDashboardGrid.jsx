import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import debounce from "just-debounce-it";

import { Spinner } from "../../atoms";
import { Container, Grid } from "../../UI-utils";
import { getPokemons } from "../../../slices";
import { useNearScreen } from "../../../hooks";

export const PokemonDashboardGrid = ({ title, Filters, children, Header }) => {
  const { pokemons } = useSelector((state) => state);
  const dispatch = useDispatch();
  const externalRef = useRef();

  const { isNearScreen } = useNearScreen({
    externalRef: pokemons.isLoading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => {
      dispatch(getPokemons(pokemons.page + 1));
    }, 1000),
    [dispatch, pokemons.page]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <Container extendedStyles="display: flex; flex-direction: column; padding: 2rem; ">
      {Header}
      {Filters}
      <Grid>{children}</Grid>
      {pokemons.isLoading && <Spinner />}
      <div ref={externalRef}></div>
    </Container>
  );
};

PokemonDashboardGrid.propTypes = {
  title: PropTypes.string.isRequired,
  Filters: PropTypes.object.isRequired,
  Header: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
