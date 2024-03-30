import React from "react";

const Footer = () => {
  return (
    <section className="pb-4 my-9">
      <div className="container">
        <div className="flex flex-wrap mx-4 justify-between ">
          <div className="w-full md:w-[25%] px-8 mb-4 md:mb-7 lg:mb-0 ">
            <img
              className="mb-2.5 w-[180px]"
              src="img/favicons/name150.png"
              alt="Ecoryds"
            />
            <p className="text-md text-secondary mb-0 font-bold">
              "We believe in power of electric to create a sustainable future.
              Our scooters are designed to offer a comfortable and reliable ride
              by reducing our carbon footprint, whether you need it for
              short&long trips or last mile delivery's"
            </p>
          </div>

          <div className="w-full md:w-[50%] ">
            <div className="flex items-center mb-4 justify-center">
              <a
                href="#!"
                className="text-decoration-none icon-item shadow-social"
                id="facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ecoryds/"
                className="text-decoration-none icon-item shadow-lg border-2"
                id="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/ecoryds?t=BgwoKGNCd9PUpEBmD87Rpg&s=09"
                className="text-decoration-none icon-item shadow-social"
                id="twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <h4 className="font-bold text-center font-sans-serif text-secondary mb-3">
              Discover our app
            </h4>
            <div className="flex items-center justify-center">
              <a href="#!">
                <img
                  className="me-2"
                  src="img/play-store.png"
                  alt="play store"
                />
              </a>
              <a href="#!">
                <img src="img/apple-store.png" alt="apple store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5 text-center">
        <p class="mb-0 text-md text-slate-500 font-semibold ">All rights reserved@ECOEVR MOBILITY PVT.LTD </p>
      
      </div>
    </section>
  );
};

export default Footer;
