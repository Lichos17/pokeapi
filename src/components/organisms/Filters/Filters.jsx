import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, InputContainer, InputIcon } from "../../atoms";
import { Flex } from "../../UI-utils";
import {
  getPokemons,
  pokemonSlice,
  setGrid,
  setPage,
  setPokemons,
  setSearch,
  setTheme,
} from "../../../slices";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Filters = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { light, grid } = useSelector((state) => state.ui);

  const handleChangeTheme = () => {
    dispatch(setTheme({ theme: !light }));
  };

  const handleDisplayFormatChange = (isGrid) => {
    dispatch(setPokemons({ ...pokemonSlice.getInitialState() }));
    dispatch(setSearch({ search: "" }));
    dispatch(getPokemons());
    dispatch(setGrid({ grid: isGrid }));
  };

  const handleInputChange = (e) => {
    dispatch(setPokemons({ ...pokemonSlice.getInitialState() }));
    dispatch(setSearch({ search: e.target.value }));
    dispatch(getPokemons());
  };

  return (
    <Flex as="nav" extendedStyles="margin-bottom: 1rem;">
      <InputContainer>
        <InputIcon className="fas fa-search" />
        <Input onChange={handleInputChange} placeholder="Buscar Pokemon" />
      </InputContainer>
      <Flex>
        <Button
          weight="bold"
          extendedStyles=""
          size="sm"
          buttonType={!grid ? "secondaryButton" : "primaryButton"}
          onClick={() => handleDisplayFormatChange(true)}
        >
          Cuadricula
        </Button>
        <Button
          weight="bold"
          extendedStyles=""
          size="sm"
          buttonType={grid ? "secondaryButton" : "primaryButton"}
          onClick={() => handleDisplayFormatChange(false)}
        >
          Lista
        </Button>
        <Button
          extendedStyles="margin-left: 1.5rem;"
          size="sm"
          buttonType="navButton"
          onClick={handleChangeTheme}
        >
          Modo Oscuro
        </Button>
      </Flex>
    </Flex>
  );
};
