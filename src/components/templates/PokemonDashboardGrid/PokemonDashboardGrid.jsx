import React, { useCallback, useEffect, useRef, useState } from "react";
import { Text } from "../../atoms";
import { Container } from "../../UI-utils";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../../slices";
import debounce from "just-debounce-it";

export const PokemonDashboardGrid = ({ title, Filters, children }) => {
  const {
    ui: { grid },
    filters,
    pokemons,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { limit } = useSelector((state) => state.pokemons);
  const { loading, setLoading } = useState(false);
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => {
      // dispatch(setLimit({ limit: 9 + limit }));
      dispatch(getPokemons(pokemons.page + 1));
    }, 1000),
    [dispatch, limit, pokemons.page]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [debounceHandleNextPage, isNearScreen]
  );

  return (
    <Container extendedStyles="display: flex; flex-direction: column;">
      <Text weight="bold" as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        {title}
      </Text>
      {Filters}
      {children}
      <div id="visor" ref={externalRef}></div>
    </Container>
  );
};

PokemonDashboardGrid.propTypes = {
  title: PropTypes.string.isRequired,
  Filters: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};
