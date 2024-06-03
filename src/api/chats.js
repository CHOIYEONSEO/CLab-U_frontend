import axios from "axios";

export const chat = (query) =>
  axios.post(`/api/chat/`, { query }).then((res) => res.data);
