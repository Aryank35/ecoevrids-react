import React from "react";

const StepItem = () => {
  const comp = [
    {
      img: "/img/category/download green.png",
      title: "Choose Destination",
      desc: "Download the app from play-store",
    },
    {
      img: "/img/category/exam-results.png",
      title: "Verify Document",
      desc: "Verify your document with few steps",
    },
    {
      img: "/img/category/bike-ride green.png",
      title: "Start your Ecofriendly ride",
      desc: "Enjoy your ecofriendly ride with your pocket freindly budget",
    },
  ];
  return (
    <>
      {comp.map((item) => (
        <div key={item.title} className="flex py-4 items-start my-2">
          <div className="bg-black me-3 sm:me-4 p-3 rounded-lg">
            <img src={item.img} width="40" alt="steps" />
          </div>
          <div className="flex-1">
            <h5 className="text-capitalize font-bold text-lg">{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StepItem;
