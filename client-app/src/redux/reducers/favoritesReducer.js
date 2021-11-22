import * as actionTypes from "../constants";

const favoritesReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_FAVORITES_SUCCESS:
      return { error: false, favorites: action.payload.characters };
    case actionTypes.GET_FAVORITES_ERROR:
      return { error: action.payload, favorites: [] };
    case actionTypes.SET_FAVORITE_SUCCESS:
      const alreadyFavorite = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(
            (item) => item.id !== action.payload.id
          ),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    case actionTypes.SET_FAVORITE_ERROR:
      return { error: action.payload, favorites: [] };
    default:
      return state;
  }
};

export default favoritesReducer;
