import { useQuery } from "@tanstack/react-query";
import useAxiosPrivet from "./useAxiosPrivet";
import { useContext } from "react";
import { MainContext } from "../Provider/Authcontext";

const useDataLoard = () => {
  const axiosPrivet = useAxiosPrivet();
  const { user } = useContext(MainContext);
  //   tan stack query
  const { refetch, data = [] } = useQuery({
    queryKey: ["allclass", user?.email],
    queryFn: async () => {
      const res = await axiosPrivet.get(
        `/allclass/useremail?email=${user?.email}`
      );
      return res.data;
    },
  });
  return [data, refetch];
};

export default useDataLoard;
