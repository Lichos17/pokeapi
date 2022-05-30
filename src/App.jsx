import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/globalStyles";
import { darkTheme, lightTheme } from "./assets/theme";
import { getPokemons } from "./slices/pokemonSlice/thunk";
import "./global.css";
import { Dashboard, PokemonId } from "./components";
import { Signup } from "./components/pages/Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./slices";
import { useParams, useSearchParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const page = searchParams.get("page");

  const { light } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
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
