import * as actionTypes from "../constants";
const initialState = {
  loading: false,
  data: [],
  error: false,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTERS_REQUEST:
      return { loading: true, error: false, data: [] };
    case actionTypes.GET_CHARACTERS_SUCCESS:
      return { loading: false, error: false, data: action.payload };
    case actionTypes.GET_CHARACTERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default charactersReducer;
