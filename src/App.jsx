import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/theme";
import { GlobalStyles } from "./assets/globalStyles";
import { MainRouter } from "./routers/AppRouter";
import "./global.css";

function App() {
  const { light } = useSelector((state) => state.ui);
  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        {/* <Login /> */}
        <MainRouter />
        {/* <PokemonId /> */}
        {/* <Signup /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
