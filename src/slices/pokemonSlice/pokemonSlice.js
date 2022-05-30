import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    pokemons: [],
    search: "",
    page: 0,
    pages: 0,
    limit: 9,
  },
  reducers: {
    // startLoading: (state) => {
    //   state.isLoading = true;
    // },
    setPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
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
      console.log(".", action.payload.limit);
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
