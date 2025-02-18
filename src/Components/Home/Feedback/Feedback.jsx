import useHomePageAll from "../../../Hooks/useHomePageAll";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  const [data, refetch] = useHomePageAll("/rating");
  //   console.log(data);

  return (
    <div>
      <div className="carousel">
        {data.map((item, i) => (
          <FeedbackCard key={i} item={item}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
