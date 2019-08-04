import axios from "axios";
import {
  GET_ALL,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE
} from "../types/taskTypes";

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const tasks = {};
    response.data.map(
      todo =>
        (tasks[todo.userId] = {
          ...tasks[todo.userId],
          [todo.id]: {
            ...todo
          }
        })
    );

    dispatch({
      type: GET_ALL,
      payload: tasks
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Tasks information no available"
    });
  }
};

export const userIdChange = userId => dispatch => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: userId
  });
};

export const titleChange = title => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  });
};
