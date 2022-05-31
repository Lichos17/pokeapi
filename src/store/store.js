import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, pokemonSlice, userSlice } from "../slices";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
});
