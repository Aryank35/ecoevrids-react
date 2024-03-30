import React from "react";

const ServiceCard = () => {
  return (
    <div>
      <div className="card w-[90%] md:w-[20%] flex flex-col items-center  text-center ">
        <img
          src="/img/category/eco_3849800.png"
          className="w-[70%]"
          alt="Service"
        />
        <h4>ECO FRIENDLY</h4>
        <p>"Start your zero carbon footprint rides with us"</p>
      </div>
    </div>
  );
};

export default ServiceCard;
