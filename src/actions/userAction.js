import axios from "axios";

export const getAll = () => async dispatch => {
  const req = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: "get_users",
    payload: req.data
  });
};
