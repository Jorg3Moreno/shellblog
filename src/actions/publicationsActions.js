import axios from "axios";
import {
  GET_ALL,
  LOADING,
  ERROR,
  UPDATE,
  COMM_UPDATE,
  COMM_LOADING,
  COMM_ERROR
} from "./../types/publicationTypes";
import * as userTypes from "./../types/userTypes";

const { GET_ALL: usersGetAll } = userTypes;

export const getAll = () => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: GET_ALL,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};

export const getByUser = key => async (dispatch, getState) => {
  dispatch({
    type: LOADING
  });

  const { users } = getState().userReducer;
  const { publications } = getState().publicationsReducer;
  const userId = users[key].id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?uiderId=${userId}`
    );

    const news = response.data.map(publication => ({
      ...publication,
      comments: [],
      open: false
    }));

    const updatedPublications = [...publications, news];

    dispatch({
      type: UPDATE,
      payload: updatedPublications
    });

    const publicationsKey = updatedPublications.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      publicationsKey
    };

    dispatch({
      type: usersGetAll,
      payload: updatedUsers
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};

export const openClose = (pubKey, commKey) => (dispatch, getState) => {
  const { publications } = getState().publicationsReducer;
  const selected = publications[pubKey][commKey];

  const updated = {
    ...selected,
    open: !selected.open
  };

  const updatedPublications = [...publications];
  updatedPublications[pubKey] = [...publications[pubKey]];
  updatedPublications[pubKey][commKey] = updated;

  dispatch({
    type: UPDATE,
    payload: updatedPublications
  });
};

export const getComments = (pubKey, commKey) => async (dispatch, getState) => {
  dispatch({
    type: COMM_LOADING
  });

  const { publications } = getState().publicationsReducer;
  const selected = publications[pubKey][commKey];

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`
    );

    const updated = {
      ...selected,
      comments: response.data
    };

    const updatedPublications = [...publications];
    updatedPublications[pubKey] = [...publications[pubKey]];
    updatedPublications[pubKey][commKey] = updated;

    dispatch({
      type: COMM_UPDATE,
      payload: updatedPublications
    });
  } catch (error) {
    dispatch({
      type: COMM_ERROR,
      payload: `Comments unavailable: ${error.message}`
    });
  }
};
