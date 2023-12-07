
import React from "react";

const Features = () => {
  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mx-auto p-8">
        <div className=" w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <img
            src="/panda.png"  
            alt="Image"
            style={{ width: "900px", height: "auto" }}
            className=" rounded-lg"
          />
        </div>

        <div className="w-1/2">
          <div className="lg:ml-10"> 
            <h3 className="text-4xl font-bold mb-2 text-[#F8A239]">Fampay</h3>
            <ul className="text-3xl list-disc pl-5 pr-10 text-[#F8A239]">
              <li className="mb-2">Super safe card that you can block or pause anytime</li>
              <li className="mb-2 ">Design your own card with a customised name and doodles</li>
              <li className="mb-2 ">A numberless card that keeps all your info secure</li>
              <li className="mb-2 ">Tap & Pay with your personalised card</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
