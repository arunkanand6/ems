import { actionTypes } from "../action/actionType";

const initialState = {
  user: {
    username: "",
    password: "",
    role: "",
    jwt: "",
  },
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return { ...state, user: { ...state.user, ...action.user } };
    case actionTypes.USER_LOGOUT:
      return initialState;
    case actionTypes.USER_GET:
      return { ...state, user: { ...state.user, ...action.user } };
    default:
      return state;
  }
}
