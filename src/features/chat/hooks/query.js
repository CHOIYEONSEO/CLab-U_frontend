import { useMutation } from "@tanstack/react-query";
import api from "../../../api";

export const useChatMutation = () =>
  useMutation({
    mutationFn: (query) => api.chats.chat(query),
  });
