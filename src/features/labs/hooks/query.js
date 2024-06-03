import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

export const useFetchLabs = (keyword) => {
  return useQuery({
    queryKey: ["labs", { keyword }],
    queryFn: () => api.labs.getList(keyword),
  });
};

export const useFetchLab = (id) => {
  return useQuery({ queryKey: ["labs", id], queryFn: () => api.labs.get(id) });
};
