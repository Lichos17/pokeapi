import React from "react";
import { Pagination, PokemonCard } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { PokemonDashboard } from "../../templates";
import { Grid } from "../../UI-utils";

export const Dashboard = () => {
  return (
    <PokemonDashboard title="Pokedex" Filters={<Filters />}>
      <Grid>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </Grid>

      {/* <table>
        <TableHead />
        <TableBody />
      </table>
      <Pagination
        pages={10}
        extendedStyles="margin-top: 2rem; align-self:center;"
      /> */}
    </PokemonDashboard>
  );
};
