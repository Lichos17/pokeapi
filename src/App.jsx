import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/globalStyles";
import { lightTheme } from "./assets/theme";
import { getPokemons } from "./slices/pokemonSlice/thunk";
import "./global.css";
import { Filters, PokemonCard, PokemonGrid, PokemonTable } from "./components";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <PokemonTable
          title={"Pokemon"}
          Filters={<Filters />}
          Body={<h1>hola</h1>}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
