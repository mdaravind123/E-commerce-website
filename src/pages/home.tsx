import React from "react";
import Navbar from "../components/navbar";
import Imageslider from "../components/imageslider";
import Productlist from "../components/productlist";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Imageslider />
      <Productlist />
      <Footer />
    </div>
  );
};

export default Home;
