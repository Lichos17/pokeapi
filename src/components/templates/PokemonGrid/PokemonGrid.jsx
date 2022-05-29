import React from "react";
import { Text } from "../../atoms";
import { Pagination, PokemonCard } from "../../molecules";
import { Filters, TableBody, TableHead } from "../../organisms";
import { Container, Grid } from "../../UI-utils";

export const PokemonGrid = () => {
  return (
    <Container>
      <Text as="h1" size="lg" extendedStyles="margin: 2rem 0;">
        Pokédex
      </Text>
      <Filters />
      <Grid>
        <PokemonCard
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg"
          abilities={["Habilidad", "Habilidad", "Habilidad"]}
          types={["Tipo", "Tipo"]}
          pokemonName="Lichonsky"
        />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard pokemonName="Lichonsky" />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </Grid>
    </Container>
  );
};
