import { useEffect, useState } from "react";
import useDataLoard from "../../Hooks/useDataLoard";
import MyClassCard from "./MyClassCard";
import UpDateClassModal from "./UpDateClassModal";
import useAxiosPrivet from "../../Hooks/useAxiosPrivet";
import { Helmet } from "react-helmet";

const MyClass = () => {
  const [id, setId] = useState("");
  const [value, setValue] = useState({});
  const [data] = useDataLoard();
  const axiosPrivet = useAxiosPrivet();

  // data load
  useEffect(() => {
    axiosPrivet
      .get(`/allclass/iddataloard/${id}`)
      .then((res) => {
        // console.log(res.data);
        setValue(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Education || MyClass</title>
      </Helmet>
      <div className="grid lg:grid-cols-3">
        {data.map((item, i) => (
          <MyClassCard key={i} item={item} setId={setId}></MyClassCard>
        ))}
      </div>
      <div>
        <div>
          <UpDateClassModal value={value}></UpDateClassModal>
        </div>
      </div>
    </>
  );
};

export default MyClass;
