import { useContext } from "react";
import { MainContext } from "../../Provider/Authcontext";

const Highlight = () => {
  const { themeColor } = useContext(MainContext);
  return (
    <div>
      <p
        className={
          themeColor === "light"
            ? "text-center text-lg font-semibold"
            : "text-center text-lg font-semibold text-white"
        }
      >
        Trusted over 20,000 <br /> companise and millions of learners arund the
        world.
      </p>
      <div className="flex justify-center items-center  flex-wrap gap-6 lg:gap-10">
        <div>
          <img
            src="https://img.icons8.com/?size=80&id=OipMSuF1pMlf&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=48&id=23427&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=48&id=VJz2Ob51dvZJ&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=48&id=wGYgIlqPWdC2&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=48&id=68803&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=80&id=xd80fkp1pXWb&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=80&id=HXv1OUDmlOj8&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=80&id=FFx7gxWBBCHu&format=png"
            alt="Companise"
            className="transition-transform transform hover:scale-110  duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
