import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../../slices";
import { Header, Pagination, PokemonCard } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { PokemonDashboardGrid, PokemonDashboardTable } from "../../templates";

export const Dashboard = () => {
  const {
    ui: { grid },
    pokemons,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return grid ? (
    <PokemonDashboardGrid
      title="Pokédex"
      Filters={<Filters />}
      Header={<Header title="Pokédex" />}
    >
      {pokemons.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          id={pokemon.id}
          pokemonName={pokemon.name}
          abilities={pokemon.abilities}
          types={pokemon.types}
          src={pokemon.sprites.front_default}
        />
      ))}
    </PokemonDashboardGrid>
  ) : (
    <PokemonDashboardTable
      title="Pokédex"
      Filters={<Filters />}
      Header={<Header title="Pokédex" />}
    >
      <table>
        <TableHead />
        <TableBody pokemons={pokemons.pokemons} />
      </table>
      <Pagination
        currentPage={pokemons.page}
        pages={pokemons.pages}
        extendedStyles="margin-top: 2rem; align-self:center;"
      />
    </PokemonDashboardTable>
  );
};
