import React from "react";
import Imageslider from "../components/imageslider";
import Electronics from "../components/electronics";
import Brandbanner from "../components/brandbanner";
import Productlist from "../components/productlist";
import Applebrandbanner from "../components/applebrandbanner";
import Mostsellingproduct from "../components/mostsellingproduct";
import Service from "../components/service";

const Home: React.FC = () => {
  return (
    <div>
      <div data-aos="fade-up">
        <Imageslider />
      </div>
      <div data-aos="fade-up">
        <Electronics />
      </div>
      <div data-aos="zoom-in">
        <Brandbanner />
      </div>
      <div data-aos="fade-right">
        <Productlist />
      </div>
      <div data-aos="fade-left">
        <Applebrandbanner />
      </div>
      <div data-aos="fade-up">
        <Mostsellingproduct />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <Service />
      </div>
    </div>
  );
};

export default Home;
