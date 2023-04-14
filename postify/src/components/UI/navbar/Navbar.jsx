import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  
  return (
    <div className="navbar">
      <MyButton onClick={logOut}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О приложении</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
