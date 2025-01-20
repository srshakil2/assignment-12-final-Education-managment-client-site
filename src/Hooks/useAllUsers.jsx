import React from "react";
import useAxiosPrivet from "./useAxiosPrivet";
import { useQuery } from "@tanstack/react-query";

const useAllUsers = (search) => {
  const axiosPrivet = useAxiosPrivet();

  // TanStack Query
  const { refetch, data = [] } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axiosPrivet.get(search);
      return res.data;
    },
    enabled: !!search,
  });

  return [data, refetch];
};

export default useAllUsers;
