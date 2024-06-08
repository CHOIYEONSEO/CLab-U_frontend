import { useQuery } from "@tanstack/react-query";
import api from "../../../api";

export const useFetchClubs = (keyword) => {
  return useQuery({
    queryKey: ["clubs", { keyword }],
    queryFn: () => api.manage.getList(keyword),
  });
};

export const useFetchClub = (id) => {
  return useQuery({ queryKey: ["clubs", id], queryFn: () => api.manage.get(id) });
};
