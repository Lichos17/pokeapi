import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, InputContainer, InputIcon } from "../../atoms";
import { Flex } from "../../UI-utils";
import {
  changeDisplayFormat,
  setPokemonSearch,
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
    dispatch(changeDisplayFormat(isGrid));
  };

  const handleInputChange = (e) => {
    dispatch(setPokemonSearch(e.target.value));
  };

  return (
    <Flex
      as="nav"
      extendedStyles="margin-bottom: 1rem; @media(max-width:480px){flex-wrap: wrap}"
    >
      <InputContainer extendedStyles=" @media(max-width:480px){width: 100%;margin-bottom: 1rem; padding: 0.5rem;}">
        <InputIcon
          className="fas fa-search"
          extendedStyles=" @media(max-width:480px){padding-left: 0.5rem;}"
        />
        <Input
          valid={true}
          value={search}
          onChange={handleInputChange}
          placeholder="Buscar Pokemon"
          extendedStyles=" @media(max-width:480px){padding: 0.8rem;}"
        />
      </InputContainer>
      <Flex extendedStyles=" @media(max-width:480px){flex-wrap: wrap}">
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
          extendedStyles="margin-left: 1.5rem; @media(max-width:480px){margin: 0;}"
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
