import React from "react";
import StepItem from "../../assets/Sub Components/StepItem";

const Download = () => {
  return (
    <div>
      <div>
        <div className="row flex items-center">
          <div className="left w-full md:w-[50%] px-[2rem]">
            <h5 className="text-3xl font-bold ">
              "Start your Ecofriendly ride at Your Fingertips!"
            </h5>
            <h3 className="text-5xl font-bold pl-5 my-3">Coming Soon!!!</h3>
            <div className="px-11">
              <StepItem />
            </div>
          </div>
          <div className="right w-full md:w-[50%]">
            <div className="card w-[60%] mx-auto h-fit py-9 shadow-xl shadow-blue-500 border-t rounded-2xl">
              <div className="w-[90%] mx-auto">
                <img src="/img/steps/SCOOTER.jpg" alt="Scooter" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
