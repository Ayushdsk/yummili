import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/food tab";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">{props.children} </div>
    </>
  );
};

export default HomeLayout;
