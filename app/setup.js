import React from "react";

const Setup = () => {
  return (
    <section className="flex items-center justify-between h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mx-auto p-8">
        {/* Left Part (Image) */}
        <div className=" w-1/2 mb-4 lg:mb-0 lg:mr-8">
          <img
            src="/setup.png" // Replace with the actual path to your image
            alt="Image"
            style={{ width: "450px", height: "auto" }}
            className=" rounded-lg"
          />
        </div>

        {/* Right Part (Text) */}
        <div className="w-1/2">
          <h2 className="text-6xl font-bold mb-2">Your own UPI to make</h2>
          <h2 className="text-5xl font-bold mb-4">super fast payments</h2>

          <br />
          <ul className="list-none text-3xl">
            <li className="flex items-center mb-2">
              <span className="before:block before:content-['✔'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
              Scan & Pay with your
              customised UPI ID
            </li>
            <li className="flex items-center mb-2">
              <span className="before:block before:content-['✔'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
              Choose personalised QR themes to match your style
            </li>
            <li className="flex items-center mb-2">
              <span className="before:block before:content-['✔'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
              Recharge, pay bills, shop online, and more
            </li>
          </ul>
          <br />
          <button className="rounded-full bg-[#F8A239] text-white px-4 py-2 text-2xl">
              Get Your Own UPI
            </button>
        </div>
      </div>
    </section>
  );
};

export default Setup;
