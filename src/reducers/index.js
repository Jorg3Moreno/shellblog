import { combineReducers } from "redux";
import userReducer from "./userReducer";
import publicationsReducer from "./publicationsReducer";

//2. Second step create reducer
export default combineReducers({ userReducer, publicationsReducer });
