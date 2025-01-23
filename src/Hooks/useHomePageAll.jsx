import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useHomePageAll = (apis) => {
  const axiosOpen = useAxiosOpen();

  // TanStack Query
  const { refetch, data = [] } = useQuery({
    queryKey: [`${apis}`, apis],
    queryFn: async () => {
      const res = await axiosOpen.get(apis);
      return res.data;
    },
    enabled: !!apis,
  });

  return [data, refetch];
};

export default useHomePageAll;
