import axios from "axios";

axios.defaults.baseURL = "https://61ba54ac48df2f0017e5aa71.mockapi.io";

const contacts = axios.get("/contacts").then((response) => response.data);

export default contacts;
