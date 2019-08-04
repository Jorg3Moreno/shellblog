import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  COMM_UPDATE,
  COMM_LOADING,
  COMM_ERROR
} from "./../types/publicationTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: null,
  commLoading: false,
  commError: null
};

//El estado inicial es un objeto vacío,
//la acción es la "tarea a realizar"
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      //esta parte es destructurar el estado que es un objeto
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: null
      };
    case UPDATE:
      //esta parte es destructurar el estado que es un objeto
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: null
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case COMM_UPDATE:
      //esta parte es destructurar el estado que es un objeto
      return {
        ...state,
        publications: action.payload,
        commLoading: false,
        commError: null
      };
    case COMM_LOADING:
      return { ...state, commLoading: true };
    case COMM_ERROR:
      return { ...state, commLoading: false, commError: action.payload };
    default:
      return state;
  }
};

export default reducer;
