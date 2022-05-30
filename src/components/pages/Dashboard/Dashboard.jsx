import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, setLimit, setPokemons } from "../../../slices";
import { Pagination, PokemonCard } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { PokemonDashboard, PokemonDashboardTable } from "../../templates";
import { Grid } from "../../UI-utils";
import debounce from "just-debounce-it";
import { PokemonDashboardGrid } from "../../templates/PokemonDashboardGrid/PokemonDashboardGrid";

export const Dashboard = () => {
  const {
    ui: { grid },
    pokemons,
  } = useSelector((state) => state);

  return grid ? (
    <PokemonDashboardGrid title="Pokedex" Filters={<Filters />}>
      {pokemons.pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemonName={pokemon.name}
          abilities={pokemon.abilities}
          types={pokemon.types}
          src={pokemon.sprites.front_default}
        />
      ))}
    </PokemonDashboardGrid>
  ) : (
    <PokemonDashboardTable title="Pokedex" Filters={<Filters />}>
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
