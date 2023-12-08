import React from "react";

const Rewards = () => {
  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mx-auto p-8">
        <div className=" w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <img
            src="/rewards.png"
            alt="Image"
            style={{ width: "390px", height: "auto" }}
            className=" rounded-lg"
          />
        </div>

        <div>
          <h2 className=" w-1/2 text-6xl font-bold mb-2">
            Earn unlimited rewards
          </h2>
          <br />
          <p className="text-3xl">
            Win infinite cashbacks, discounts, and offers on your favourite
            brands
          </p>
          <br />
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 w-1/2"></div>
          <button className="bg-[#181818] text-white p-3 rounded-md flex  items-center justify-center text-2xl ">
          <img src="/rewicon1.png" alt="Icon 1" className="w-22 h-35 " />
            Exclusive giveaways of PS5, AirPods, iPhone, and more
           
          </button>
          <br />

          <button className="bg-[#181818] text-white p-3 rounded-md flex items-center justify-center  text-2xl">
          <img src="/rewicon2.png" alt="Icon 1" className="w-22 h-35 " />
            Earn unlimited rewards Rewards every time you spend with FamPay
            
          </button>
          <br />

          <button className="bg-[#181818] text-white p-3 rounded-md flex items-center justify-center text-2xl">
          <img src="/rewicon3.png" alt="Icon 1" className="w-22 h-35 " />
            Challenges that help you save more and earn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
