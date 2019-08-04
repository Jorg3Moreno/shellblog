import { combineReducers } from "redux";
import userReducer from "./userReducer";
import publicationsReducer from "./publicationsReducer";
import tasksReducer from "./tasksReducer";

//2. Second step create reducer
export default combineReducers({
  userReducer,
  publicationsReducer,
  tasksReducer
});
