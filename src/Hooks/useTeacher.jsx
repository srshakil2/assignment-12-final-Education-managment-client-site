import React, { useContext } from "react";
import { MainContext } from "../Provider/Authcontext";
import useAxiosPrivet from "./useAxiosPrivet";
import { useQuery } from "@tanstack/react-query";

const useTeacher = () => {
  const { user, loding } = useContext(MainContext);
  const axiosPrivet = useAxiosPrivet();
  const { data, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "teacher"],
    enabled: !loding,
    queryFn: async () => {
      // console.log('asking or checking is admin', user)
      const res = await axiosPrivet.get(`/onteach/${user?.email}`);
      // console.log(res.data);
      return res.data?.role;
    },
  });
  return [data, isAdminLoading];
};

export default useTeacher;
