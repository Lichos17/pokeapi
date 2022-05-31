import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, InputContainer, InputIcon } from "../../atoms";
import { Flex } from "../../UI-utils";
import {
  getPokemons,
  pokemonSlice,
  setGrid,
  setInitialState,
  setPage,
  setPokemons,
  setSearch,
  setTheme,
} from "../../../slices";
export const Filters = () => {
  const dispatch = useDispatch();
  const { light, grid } = useSelector((state) => state.ui);
  const { search } = useSelector((state) => state.pokemons);

  const handleChangeTheme = () => {
    dispatch(setTheme({ theme: !light }));
  };

  const handleDisplayFormatChange = (isGrid) => {
    dispatch(setInitialState());
    dispatch(getPokemons());
    dispatch(setGrid({ grid: isGrid }));
  };

  const handleInputChange = (e) => {
    dispatch(setPokemons({ ...pokemonSlice.getInitialState() }));
    dispatch(setSearch({ search: e.target.value }));
    dispatch(getPokemons(1));
  };

  return (
    <Flex as="nav" extendedStyles="margin-bottom: 1rem;">
      <InputContainer>
        <InputIcon className="fas fa-search" />
        <Input
          valid={true}
          value={search}
          onChange={handleInputChange}
          placeholder="Buscar Pokemon"
        />
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
