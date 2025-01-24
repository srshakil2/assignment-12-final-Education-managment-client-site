import { useContext } from "react";
import useAllsoGet from "../../../Hooks/useAllsoGet";
import { MainContext } from "../../../Provider/Authcontext";
import MyEnrollCard from "./MyEnrollCard";
import { Helmet } from "react-helmet";

const MyEnrolls = () => {
  const { user } = useContext(MainContext);
  const [data, refetch] = useAllsoGet(`/payment/class/${user?.email}`);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
      <Helmet>
        <title>Education || MyEnroll</title>
      </Helmet>
      {data.map((item, i) => (
        <MyEnrollCard key={i} item={item}></MyEnrollCard>
      ))}
    </div>
  );
};

export default MyEnrolls;
