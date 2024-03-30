import React from "react";

const Hero = () => {
  return (
    <section className="pt-[7rem]">
      <div className="flex justify-center items-center">
        <div className="flex-col flex md:flex-row-reverse">
          <div className="md:w-[50%] w-full mx-auto">
            <img
              className="pt-1 w-full"
              src="/img/hero/2-removebg-preview.png"
              alt="hero-header"
            />
          </div>
          <div className="md:w-[50%] w-full md:px-5 px-[8%] md:py-0 py-[80px] mx-auto flex justify-center items-center flex-col space-y-[40px]">
            <h1 className="text-black md:text-center mx-auto font-bold text-[3rem] md:text-[4rem]  ">
              "Lets explore <br /> the city with <br /> ecofriendly <br /> travel Buddy"
            </h1>
            <div className=""><a class="mb-3 border-0 bg-orange-400 md:px-6 px-4 py-3 md:py-4 rounded-lg text-lg md:text-2xl text-white font-semibold" href="#!" role="button">Find out more</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
