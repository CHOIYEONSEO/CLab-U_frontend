import axios from "axios";

export const get = (id) => axios.get(`/api/clubs/${id}`).then((res) => res.data);
export const getList = (keyword) => {
  return axios
    .get(`/api/clubs`, { params: { keyword } })
    .then((res) => res.data);
};

export const create = (data) => {
  return axios
    .post(`/api/clubs`, data)
    .then((res) => res.data);
};