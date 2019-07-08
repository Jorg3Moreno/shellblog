import { GET_ALL, LOADING, ERROR } from "./../types/publicationTypes";

const INITIAL_STATE = {
  publications: [],
  loading: false,
  error: null
};

//El estado inicial es un objeto vacío,
//la acción es la "tarea a realizar"
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      //esta parte es destructurar el estado que es un objeto
      return { ...state, publications: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
