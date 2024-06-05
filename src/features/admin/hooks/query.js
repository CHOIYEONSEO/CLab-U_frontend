import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

export const useFetchClubs = (keyword) => {
  return useQuery({
    queryKey: ["forms", { keyword }],
    queryFn: () => api.manage.getList(keyword),
  });
};

export const useFetchClub = (id) => {
  return useQuery({ queryKey: ["forms", id], queryFn: () => api.manage.get(id) });
};
