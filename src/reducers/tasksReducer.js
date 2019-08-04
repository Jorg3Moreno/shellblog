import { GET_ALL, LOADING, ERROR } from "./../types/taskTypes";

const INITIAL_STATE = {
  tasks: {},
  loading: false,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return { ...state, tasks: action.payload, loading: false, error: null };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
