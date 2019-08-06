import axios from "axios";
import {
  GET_ALL,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  SAVED_TASK,
  UPDATE_TASK
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

export const saveTask = newTask => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newTask
    );
    console.log(response.data);

    dispatch({
      type: SAVED_TASK
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "Problems to save task, try it later"
    });
  }
};

export const editTask = editedTask => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editedTask.id}`,
      editedTask
    );
    console.log(response.data);

    dispatch({
      type: SAVED_TASK
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "Problems to edit task, try it later"
    });
  }
};

export const deleteTask = taskId => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`
    );
    console.log(response);

    dispatch({
      type: GET_ALL,
      payload: {}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "Problems to delete task, try it later"
    });
  }
};

export const checkChange = (userId, taskId) => async (dispatch, getState) => {
  const { tasks } = getState().tasksReducer;
  const selectedTask = tasks[userId][taskId];

  const updatedTask = {
    ...tasks
  };
  updatedTask[userId] = {
    ...tasks[userId]
  };
  updatedTask[userId][taskId] = {
    ...tasks[userId][taskId],
    completed: !selectedTask.completed
  };

  try {
    dispatch({
      type: UPDATE_TASK,
      payload: updatedTask
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: "Problems to edit task, try it later"
    });
  }
};
