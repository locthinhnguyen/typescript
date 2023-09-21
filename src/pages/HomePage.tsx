import React from 'react';
import Navbar from '../components/NavBar';
import Home from './Home';
import Login from './Login';

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center">
      <Navbar />
      <Login />
    </div>
  );
};

export default HomePage;
