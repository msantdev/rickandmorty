import * as actionTypes from "../constants";
const initialState = {
  authenticated: false,
  username: "",
  errorLogin: null,
  errorRegister: null,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return {
        ...state,
        username: action.payload,
        errorLogin: null,
        authenticated: true,
      };
    case actionTypes.UNAUTH_USER:
      return { ...state, username: "", errorLogin: null, authenticated: false };
    case actionTypes.AUTH_ERROR:
      return { ...state, errorLogin: action.payload };
    case actionTypes.REGISTER_USER:
      return { ...state, message: action.payload, errorRegister: null };
    case actionTypes.REGISTER_ERROR:
      return { ...state, errorRegister: action.payload };
    default:
      return state;
  }
};

export default authReducer;
