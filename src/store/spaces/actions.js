import axios from "axios";
import { startLoading, spacesFetched, oneSpaceFetched } from "./slice";

const API_URL = `http://localhost:4000`;

export async function fetchSpaces(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/spaces`);
    console.log("response", response);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (e) {
    console.log(e.message);
  }
}

export function fetchOneSpace(id) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`${API_URL}/spaces/${id}`);
      const space = response.data;
      console.log(space);
      dispatch(oneSpaceFetched(space));
    } catch (e) {
      console.log(e);
    }
  };
}
