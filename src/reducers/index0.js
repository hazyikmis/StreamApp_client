import { combineReducers } from "redux";
import authReducer from "./authReducer";

/*
export default combineReducers({
  replaceMe: () => "dummy reducer"
});
*/

export default combineReducers({
  auth: authReducer
});
