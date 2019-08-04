import {
  GET_ALL,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE
} from "./../types/taskTypes";

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: null,
  userId: "",
  title: ""
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, tasks: action.payload, loading: false, error: null };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case CHANGE_USER_ID:
      return { ...state, userId: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default reducer;
