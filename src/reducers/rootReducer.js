import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import callReducer from "./callReducer";

export default combineReducers({
  form: formReducer,
  callReducer
});
