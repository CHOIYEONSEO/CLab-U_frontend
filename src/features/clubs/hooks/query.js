import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

export const useFetchLabs = (keyword) => {
  return useQuery({
    queryKey: ["clubs", { keyword }],
    queryFn: () => api.clubs.getList(keyword),
  });
};

export const useFetchLab = (id) => {
  return useQuery({ queryKey: ["clubs", id], queryFn: () => api.clubs.get(id) });
};
