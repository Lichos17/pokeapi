import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    isLoading: false,
    page: 0,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoading, setPokemons } = pokemonSlice.actions;
