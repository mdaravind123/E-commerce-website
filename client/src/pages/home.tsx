import React from "react";
import Imageslider from "../components/imageslider";
import Electronics from "../components/electronics";
import Brandbanner from "../components/brandbanner";
import Productlist from "../components/productlist";

const Home: React.FC = () => {
  return (
    <div>
      <Imageslider />
      <Electronics />
      <Brandbanner />
      <Productlist />
    </div>
  );
};

export default Home;
