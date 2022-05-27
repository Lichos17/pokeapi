import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/globalStyles";
import { lightTheme, darkTheme } from "./assets/theme";
import { MainRouter } from "./routers/AppRouter";
import { getPokemons } from "./slices/pokemonSlice/thunk";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    console.log("hola");
    dispatch(getPokemons());
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
