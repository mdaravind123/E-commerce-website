import React, { useEffect } from "react";
import Imageslider from "../components/imageslider";
import Electronics from "../components/electronics";
import Brandbanner from "../components/brandbanner";
import Productlist from "../components/productlist";
import Applebrandbanner from "../components/applebrandbanner";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once
    });
  }, []);

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
    </div>
  );
};

export default Home;
