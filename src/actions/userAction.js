import axios from "axios";
import { GET_ALL, LOADING, ERROR } from "./../types/userTypes";

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const req = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: GET_ALL,
      payload: req.data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};