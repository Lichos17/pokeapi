import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/globalStyles";
import { lightTheme } from "./assets/theme";
import { getPokemons } from "./slices/pokemonSlice/thunk";
import "./global.css";
import { Dashboard, PokemonId } from "./components";
import { Signup } from "./components/pages/Signup/Signup";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        {/* <Login /> */}
        <Dashboard />
        {/* <PokemonId /> */}
        {/* <Signup /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
