import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setLimit, setPokemons } from "../../../slices";
import { Pagination, PokemonCard } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { PokemonDashboard } from "../../templates";
import { Grid } from "../../UI-utils";
import debounce from "just-debounce-it";

export const Dashboard = () => {
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
      console.log(pokemons.page);
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
    <PokemonDashboard title="Pokedex" Filters={<Filters />}>
      {grid ? (
        <Grid>
          {pokemons.pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemonName={pokemon.name}
              abilities={pokemon.abilities}
              types={pokemon.types}
              src={pokemon.sprites.front_default}
            />
          ))}
          <div id="visor" ref={externalRef}></div>
        </Grid>
      ) : (
        <>
          <table>
            <TableHead />
            <TableBody pokemons={pokemons.pokemons} />
          </table>
          <Pagination
            currentPage={pokemons.page}
            pages={pokemons.pages}
            extendedStyles="margin-top: 2rem; align-self:center;"
          />
        </>
      )}
    </PokemonDashboard>
  );
};

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (element) observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
