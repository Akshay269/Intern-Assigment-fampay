import React from "react";

const HomePage = () => {
  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mx-auto p-8">
        <div className=" w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <img
            src="/panda.png"
            alt="Image"
            style={{ width: "900px", height: "auto" }}
            className="rounded-lg"
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-6xl font-bold mb-2">Personalised UPI</h2>
          <h2 className="text-5xl font-bold mb-4">and card for teens</h2>

          <br />
          <p className=" text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque sunt
            quod magni quis reprehenderit ducimus omnis quidem corrupti dolorum
          </p>

          <br />

          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4">
            <button className="rounded-full bg-[#F8A239] text-white px-4 py-2 text-2xl">
              Get Now
            </button>
            <button className="rounded-full  bg-[#0A0A0A] text-white px-4 py-2 text-2xl border border-white">
              Learn Now
            </button>
          </div>
          <br />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-1/2">
            <button className="bg-[#181818] text-white p-3 rounded-md flex flex-col items-center justify-center ">
              <span className="text-2xl text-white">4.4 ratings</span>
              <span className="text-sm text-[#4D4D4D]">on google play store</span>
            </button>

            <button className="bg-[#181818] text-white p-4 rounded-md flex flex-col items-center justify-center">
              <span className="text-2xl text-white">10M+Downloder</span>
              <span className="text-sm text-[#4D4D4D]">on google play store</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
