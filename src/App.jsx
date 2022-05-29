import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./assets/globalStyles";
import { lightTheme, darkTheme } from "./assets/theme";
import { Login, PokemonGrid, PokemonTable } from "./components";
import { MainRouter } from "./routers/AppRouter";
import { getPokemons } from "./slices/pokemonSlice/thunk";
import "./global.css";
import Modal from "react-modal";
import { InfoCard } from "./components/molecules/InfoCard/InfoCard";
import { PokemonModal } from "./components/templates/PokemonModal/PokemonModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    height: "80vh",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const Body = styled.tbody`
  width: 100%;
  & tr:nth-child(2n + 1) {
    background-color: green;
  }
`;

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  );
}

export default App;
