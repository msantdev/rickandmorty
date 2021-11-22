import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import authReducer from "./authReducer";
import favoritesReducer from "./favoritesReducer";

const reducers = combineReducers({
  characters: charactersReducer,
  auth: authReducer,
  favorites: favoritesReducer,
});

export default reducers;
