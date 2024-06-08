import axios from "axios";

export const getList = (keyword) => {
  return axios
    .get(`/api/manage`, { params: { keyword } })
    .then((res) => res.data);
};

export const get = (id) => {
  return axios
    .get(`/api/manage/${id}`)
    .then((res) => res.data);
};