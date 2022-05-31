import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    search: "",
    page: 1,
    pages: 0,
    limit: 16,
    isLoading: false,
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
    setIsLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    setInitialState: (state, action) => {
      state.pokemons = [];
      state.search = "";
      state.limit = 16;
      state.page = 1;
      state.pages = 0;
    },
  },
});

export const {
  startLoading,
  setPokemons,
  setPage,
  setPages,
  setSearch,
  setIsLoading,
  setInitialState,
} = pokemonSlice.actions;

export const initialState = pokemonSlice.getInitialState();
