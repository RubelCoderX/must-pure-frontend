import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const ts_token = localStorage.getItem("ts_token");

  const {
    data: userData = null,
    isLoading,
    refetch: userFetch,
  } = useQuery({
    queryKey: ["user-data"],
    queryFn: async () => {
      if (ts_token) {
        const res = await axiosSecure("/api/profile");
        return res.data;
      }
    },
    enabled: !!ts_token,
  });

  return [userData, isLoading, userFetch];
};

export default useUser;
