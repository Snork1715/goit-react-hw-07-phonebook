import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./phonebook-actions";

axios.defaults.baseURL = "https://61ba54ac48df2f0017e5aa71.mockapi.io";

export const fetchContactsOperation = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContactsOperation =
  ({ name, phone }) =>
  (dispatch) => {
    const contact = {
      name,
      phone,
    };
    dispatch(addContactsRequest());
    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactsSuccess(data)))
      .catch((error) => dispatch(addContactsError(error)));
  };

export const deleteContactsOperation = (id) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch((error) => dispatch(deleteContactsError(error)));
};
