import { useNavigate } from "react-router-dom";

export function useNavigateToSearch() {
  const navigate = useNavigate();
  return (initialQuery) => {
    navigate(`/search?query=${initialQuery}`);
  };
}
