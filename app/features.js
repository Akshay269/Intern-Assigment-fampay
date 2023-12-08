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
            <h3 className="text-4xl font-bold mb-4 text-[#F8A239]">Fampay</h3>
            <ul className="list-none text-3xl">
              <li className="flex items-center mb-4">
                <span className="before:block before:content-['•'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
                Tap & Pay with your personalised card.
              </li>
              <li className="flex items-center mb-4">
                <span className="before:block before:content-['•'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
                A numberless card that keeps all your info secure.
              </li>
              <li className="flex items-center mb-4">
                <span className="before:block before:content-['•'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
                Design your own card with a customised name and doodles.
              </li>
              <li className="flex items-center mb-4">
                <span className="before:block before:content-['•'] before:text-2xl before:mr-3 before:text-[#F8A239]"></span>
                Super safe card that you can block or pause anytime.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
