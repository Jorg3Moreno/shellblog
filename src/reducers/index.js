import { combineReducers } from "redux";
import userReducer from "./userReducer";

//2. Second step create reducer
export default combineReducers({ userReducer });
