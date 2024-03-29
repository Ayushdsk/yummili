import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";
import { getImage } from "../Redux/Reducer/Images/Images.action";

const RestaurantCard = (props) => {
  console.log(props.photos);
  const [image, setImage] = useState({
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    props?.photos &&
      dispatch(getImage(props?.photos)).then((data) =>
        setImage(data.payload.image)
      );
  }, [props.photos]);

  return (
    <Link
      to={`/restaurant/${props._id}`}
      className="w-full md:w-1/2 lg:w-1/3 hover:shadow-2xl transition duration-200 ease-in-out"
    >
      <div className="bg-white p-4 mb-4 ">
        <div className="w-full h-56 lg:h-64 relative rounded-2xl">
          <div className="absolute w-full bottom-4 flex items-end justify-between">
            <div className="flex flex-col gap-2 items-start">
              {props.isPro && (
                <span className="bg-yummilicious-400 text-white px-2 py-1 rounded text-sm">
                  Pro extra 10% off
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  ₹{`${props.isOff}`} OFF
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded	mr-3">
              {props.durationOfdelivery} min
            </span>
          </div>
          <img
            src={image?.images.length && image?.images[0].location}
            alt="food"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center">
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{props.cuisine.join(", ")}</p>
            <p>₹ {props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
