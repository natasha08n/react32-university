import {
  ADD_CITY,
  DELETE_CITY,
  GET_CITIES,
  ADD_FACULTY,
  DELETE_FACULTY,
} from "./action-types";

export function addCity({ id, name }) {
  return { type: ADD_CITY, payload: { id, name } };
}

export function deleteCity(id) {
  return { type: DELETE_CITY, payload: { id } };
}

export function getCities() {
  return { type: GET_CITIES };
}

export function addFaculty({ id, name }) {
  return { type: ADD_FACULTY, payload: { id, name } };
}

export function deleteFaculty(id) {
  return { type: DELETE_FACULTY, payload: { id } };
}
