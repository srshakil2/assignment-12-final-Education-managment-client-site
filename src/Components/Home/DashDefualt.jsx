import { useContext } from "react";
import { MainContext } from "../../Provider/Authcontext";

const DashDefualt = () => {
  const { user } = useContext(MainContext);
  console.log(user);
  return (
    <div>
      {/* section Defualt */}
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-[200px] h-[200px]">
          <img
            className="rounded-full w-full h-full"
            defaultChecked
            src={user?.photoURL}
            alt=""
          />
        </div>
        <h2 className="text-2xl md:text-6xl font-bold">
          {" "}
          Welcome To Dashboard
        </h2>
        <p className="text-2xl font-semibold">
          Hi! {user?.displayName} .From here you can manage all your data very
          nicely.
        </p>
      </div>
    </div>
  );
};

export default DashDefualt;
