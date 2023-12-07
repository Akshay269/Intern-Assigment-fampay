
import React from "react";

const Trusted = () => {
  return (
    <section className="flex items-center justify-center h-screen">
    <div className="w-full mx-auto p-8 text-center justify-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 ">We are Trusted by</h2>
      <br />
      <br />
      <br />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-1/2">
        {/* Button 1 */}
        <button className="bg-[#181818] text-white p-3 rounded-md flex items-center justify-center ">
          {/* Icon for Button 1 */}
          <img src="/icon1.png" alt="Icon 1" className="w-60 h-10" />
        </button>

        {/* Button 2 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 2 */}
          <img src="/icon2.png" alt="Icon 2" className="w-60 h-10" />
        </button>

        {/* Button 3 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 3 */}
          <img src="/icon3.png" alt="Icon 3" className="w-60 h-10" />
        </button>

        {/* Button 4 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 4 */}
          <img src="/icon4.png" alt="Icon 4" className="w-60 h-10" />
        </button>

        {/* Button 5 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 5 */}
          <img src="/icon5.png" alt="Icon 5" className="w-60 h-10" />
        </button>

        {/* Button 6 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 6 */}
          <img src="/icon6.png" alt="Icon 6" className="w-60 h-10" />
        </button>

        {/* Button 7 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 7 */}
          <img src="/icon7.png" alt="Icon 7" className="w-60 h-10" />
        </button>

        {/* Button 8 */}
        <button className="bg-[#181818] text-white p-4 rounded-md flex items-center justify-center">
          {/* Icon for Button 8 */}
          <img src="/icon8.png" alt="Icon 8" className="w-60 h-10" />
        </button>
      </div>
    </div>
  </section>
  );
};

export default Trusted;
