import React from "react";

//components
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold sticky bg-white w-full px-2 py-1 z-10 top-0">
          {props.title}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((item) => (
            <FoodItem {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
