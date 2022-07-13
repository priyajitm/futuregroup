import React, { createContext, useReducer } from "react";
import axios from 'axios'
import AppReducer from "./AppReducer";

const initialState = {
  movies: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getMovies = async () => {
    const response = await axios.get('/movies')
    if (response.status == 200) {
      dispatch({
        type: 'MOVIE_LIST',
        payload: response.data
      })
    }
  }

  return (
    <AppContext.Provider value={{ movies: state.movies, getMovies }}>
      {children}
    </AppContext.Provider>
  );
};
