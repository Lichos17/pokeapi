import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../slices";
import { pokemonSlice } from "../slices/pokemonSlice/pokemonSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
  },
});
