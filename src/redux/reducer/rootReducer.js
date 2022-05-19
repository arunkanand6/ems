import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  employee: employeeReducer,
  user: userReducer,
});

export default rootReducer;
