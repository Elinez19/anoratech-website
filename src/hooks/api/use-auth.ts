import { getCurrentUserQueryFn } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: getCurrentUserQueryFn,
    staleTime: 0,
    retry: 2,
  });
  return { data, isLoading, error };
};

export default useAuth;