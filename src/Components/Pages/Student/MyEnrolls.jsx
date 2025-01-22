import { useContext } from "react";
import useAllsoGet from "../../../Hooks/useAllsoGet";
import { MainContext } from "../../../Provider/Authcontext";
import MyEnrollCard from "./MyEnrollCard";

const MyEnrolls = () => {
  const { user } = useContext(MainContext);
  const [data, refetch] = useAllsoGet(`/payment/class/${user?.email}`);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      {data.map((item, i) => (
        <MyEnrollCard key={i} item={item}></MyEnrollCard>
      ))}
    </div>
  );
};

export default MyEnrolls;
