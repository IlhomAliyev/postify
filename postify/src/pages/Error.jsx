import React from 'react';
import Navbar from '../components/UI/navbar/Navbar';
import '../styles/Error.css';

const Error = () => {
  return (
    <div className='Error'>
      <Navbar />
      <h1>Ошибка. Вы перешли на несуществующую страницу!</h1>
    </div>
  );
};

export default Error;
