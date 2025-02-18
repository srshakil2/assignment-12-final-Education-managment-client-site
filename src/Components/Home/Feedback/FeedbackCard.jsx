const FeedbackCard = ({ item }) => {
  const { description, name, title, rating, photoURL } = item || {};
  // console.log(item);
  const bio = description.slice(0, 44);
  const heding = title.slice(0, 25);
  //   console.log(bio);
  return (
    <div className="carousel-item  items-center justify-center ml-5 p-2">
      <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-5">
        <div className="w-[100px] h-[100px] ">
          <img
            className="h-full w-full rounded-full "
            src={photoURL}
            alt={name}
          />
        </div>

        <div className="rating">
          <input
            type="radio"
            name={`rating-2`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name={`rating-${rating}`}
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name={`rating-2`}
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name={`rating-2`}
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold">Name: {name}</h3>
          <p className="font-medium">Title: {heding}...</p>
          <p className="">{bio}...</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
2;
