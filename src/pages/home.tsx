import React from "react";
import Navbar from "../components/navbar";
import Imageslider from "../components/imageslider";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Imageslider />
      <Footer />
    </div>
  );
};

export default Home;
