import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useAllsoGet = (input) => {
  const axiosOpen = useAxiosOpen();

  // TanStack Query
  const { refetch, data = [] } = useQuery({
    queryKey: [`${input}`],
    queryFn: async () => {
      const res = await axiosOpen.get(input);
      return res.data;
    },
    enabled: !!input,
  });

  return [data, refetch];
};

export default useAllsoGet;
