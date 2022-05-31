import { setInitialState, getPokemons } from "../pokemonSlice";
import { setGrid } from "./uiSlice";

export const changeDisplayFormat = (isGrid) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setInitialState());
      dispatch(getPokemons());
      dispatch(setGrid({ grid: isGrid }));
    } catch (err) {}
  };
};
