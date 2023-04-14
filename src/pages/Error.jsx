import React from 'react';
import Navbar from '../components/UI/navbar/Navbar';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className='Error'>
      <Navbar />
      <h1>Error :( You have gone to a non-existent page!</h1>
    </div>
  );
};

export default Error;
