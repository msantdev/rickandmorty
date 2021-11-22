import axios from "axios";
import * as actionTypes from "../constants";

const API_URL = process.env.REACT_APP_API;

export const login = (username, password, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/login`, {
      username,
      password,
    });
    dispatch({
      type: actionTypes.AUTH_USER,
      payload: username,
    });
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("username", username);
    history.push("/");
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: error?.response?.data?.error,
    });
  }
};

export const register = (username, password, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/register`, {
      username,
      password,
    });
    dispatch({
      type: actionTypes.REGISTER_USER,
      payload: data.message,
    });
    history.push("/login");
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_ERROR,
      payload: error?.response?.data?.error,
    });
  }
};

export const logout = (history) => async (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("username");

  dispatch({
    type: actionTypes.UNAUTH_USER,
  });
  history.push("/login");
};

export const getCharacters = (page) => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_CHARACTERS_REQUEST,
  });
  try {
    const { data } = await axios.get(`${API_URL}/api/characters`, {
      params: { page },
    });
    dispatch({
      type: actionTypes.GET_CHARACTERS_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CHARACTERS_ERROR,
      payload: error.message,
    });
  }
};

export const getFavorites = (username) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/private/characters/favorites`,
      {
        params: { username },
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    dispatch({
      type: actionTypes.GET_FAVORITES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_FAVORITES_ERROR,
      payload: error.message,
    });
  }
};

export const setFavorite = (username, id, name) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `${API_URL}/api/private/characters/favorites/${id}`,
      { username, name },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    dispatch({
      type: actionTypes.SET_FAVORITE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SET_FAVORITE_ERROR,
      payload: error.message,
    });
  }
};
