import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=" flex flex-col items-center pt-8 gap-y-5">
      <h2 className=" text-2xl font-bold text-green-500">App ToDo</h2>
      <div className="flex items-center gap-10">
        <Link
          to={'/login'}
          className="text-xl font-semibold hover:text-orange-400 duration-300"
        >
          Login
        </Link>
        <div className="flex items-center gap-10">
          <Link
            to={'/'}
            className="text-xl font-semibold hover:text-orange-400 duration-300"
          >
            HomePage
          </Link>
          <Link
            to={'/register'}
            className="text-xl font-semibold hover:text-orange-400 duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
