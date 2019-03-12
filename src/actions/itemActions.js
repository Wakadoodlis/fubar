import { GET_ITEMS, ADD_VALUE } from "./types";
import axios from "axios";
import ENDPOINTS from "../api/endpoints";

export const getItems = values => async dispatch => {
  const res = await axios.get(`https://fubar.com/person/${values}`);
  dispatch({
    type: GET_ITEMS,
    payload: res.data
  });
};

export const addContact = value => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    value
  );
  dispatch({
    type: ADD_VALUE,
    payload: res.data
  });
};
