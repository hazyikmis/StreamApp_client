import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

/*
export default combineReducers({
  replaceMe: () => "dummy reducer"
});
*/

/*
export default combineReducers({
  auth: authReducer
});
*/
/*
export default combineReducers({
  auth: authReducer,
  form: formReducer
});
*/
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer
});
