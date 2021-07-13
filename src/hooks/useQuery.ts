import { useLocation } from "react-router"

export const useQuery = (query: string) => {
  const search = new URLSearchParams(useLocation().search);
  return search.get(query);
}