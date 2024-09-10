import React from "react";
import { faq, homeDelivery, OnlinePayment } from "../assets/image";

const Service: React.FC = () => {
  return (
    <div className="2xl:container mx-auto my-10">
      <div className="w-[90%] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-medium mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={faq} alt="faq" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-4">
                  Frequently Asked Questions
                </h1>
                <p>
                  Get answers to the most common questions our customers have
                  about shipping, returns, and more.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={homeDelivery}
                alt="homeDelivery"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-4">
                  Home Delivery Options
                </h1>
                <p>
                  We offer flexible home delivery options to make sure you get
                  your order when it’s most convenient for you.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={OnlinePayment}
                alt="OnlinePayment"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-4">
                  Online Payment Process
                </h1>
                <p>
                  Our secure online payment system ensures that your
                  transactions are fast, safe, and easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
