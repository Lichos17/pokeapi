import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    search: "",
    page: 1,
    pages: 0,
    limit: 9,
  },
  reducers: {
    // startLoading: (state) => {
    //   state.isLoading = true;
    // },
    setPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
    setSearch: (state, action) => {
      state.search = action.payload.search;
    },
    setPages: (state, action) => {
      state.pages = action.payload.pages;
    },
    setLimit: (state, action) => {
      state.limit = action.payload.limit;
    },
  },
});

export const {
  startLoading,
  setPokemons,
  setPage,
  setPages,
  setSearch,
  setLimit,
} = pokemonSlice.actions;

const initialState = pokemonSlice.getInitialState();
