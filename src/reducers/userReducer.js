const INITIAL_STATE = {
  users: []
};

//El estado inicial es un objeto vacío,
//la acción es la "tarea a realizar"
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "get_users": {
      //esta parte es destructurar el estado que es un objeto
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
