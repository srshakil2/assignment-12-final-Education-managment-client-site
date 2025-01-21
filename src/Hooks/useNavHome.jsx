import { useQuery } from "@tanstack/react-query";
import useAxiosOpen from "./useAxiosOpen";

const useNavHome = () => {
  const axiosOpen = useAxiosOpen();
  const { refetch, data = [] } = useQuery({
    queryKey: ["allclass", "/allclass"],
    queryFn: async () => {
      const res = await axiosOpen.get("/allclass");
      return res.data;
    },
    // enabled: !!"/allclass",
  });

  return [data, refetch];
};

export default useNavHome;
