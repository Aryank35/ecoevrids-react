import React from "react";

const Contact = () => {
  return (
    <div className="pt-6 w-[90%] my-[100px] mx-auto">
      <div className="bg-[#e4ddf957]  h-full relative text-center rounded-tl-[129px] rounded-[20px] py-8 px-5">
        <div className="absolute -top-4 -right-4 ">
          <img
            src="/img/cta/send.png"
            alt="send icon"
            className="max-w-[70px]"
          />
        </div>
        <div className="absolute z-10 right-0 top-0">
          <img src="/img/cta/shape-bg2.png" alt="cta shape"  />
        </div>
        <div className="absolute z-10 bottom-0">
          <img
            src="/img/cta/shape-bg1.png"
            alt="cta shape"
            className="max-w-[340px]"
          />
        </div>
        <div className="contact flex flex-col justify-center items-center pt-[50px] h-fit">
          <h2 className="text-2xl font-bold text-center mb-9">"Fill out the form below to get in touch with us."</h2>
          <form action="#" className="flex flex-col w-full mx-auto justify-center items-center ">
            <div className=" flex active:border-2 border-orange-400  py-4 w-[90%] md:w-[45%] mx-auto bg-white rounded-xl">
            <img src="/img/cta/mail.svg" alt=" mail" className="w-11 pl-3" />
            <input type="email" placeholder="Enter your email..." className="w-full px-9 bg-transparent outline-none " />
            </div>
            <button className="px-8 bg-orange-400 py-4 text-lg font-semibold rounded-xl my-9 text-white">Subscribe</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
