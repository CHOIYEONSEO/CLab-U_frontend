import axios from "axios";

export const get = (id) => axios.get(`/api/labs/${id}`).then((res) => res.data);
export const getList = (keyword) => {
  return axios
    .get(`/api/labs`, { params: { keyword } })
    .then((res) => res.data);
};
