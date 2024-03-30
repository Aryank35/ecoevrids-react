import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed w-full md:px-[20px] md:py-[10px] bg-slate-100">
      <div className="navbar-container flex justify-between items-center  ">
      <Link to="/" className="navbar-brand p-4">
          <img src="img/favicons/name150.png" height="34" alt="logo" className='w-[70%]' />
        </Link>
        <ul className="navbar-links hidden md:flex justify-around w-[70%] text-xl font-semibold items-center">
          <li>
            <Link to="/services" className='hover:underline hover:text-orange-400 underline-offset-2'>Services</Link>
          </li>
          <li>
            <Link to="/about" className='hover:underline hover:text-orange-400 underline-offset-2'>About Us</Link>
          </li>
          <li>
            <Link to="/partners" className='hover:underline hover:text-orange-400 underline-offset-2'>Partner with Us</Link>
          </li>
          <li>
            <Link to="/blogs" className='hover:underline hover:text-orange-400 underline-offset-2'>Blogs</Link>
          </li>
          <li className="navbar-button border-2 rounded-md border-black hover:bg-black hover:text-white px-6 py-2">
            <a href="#">Join Waitlist</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
