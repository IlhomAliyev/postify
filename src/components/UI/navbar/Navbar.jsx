import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';
import './Navbar.scss';

const Navbar = ({ themeSwitch }) => {
  const { setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
        <h1>Postify</h1>
        <div className="navbar__btns">
          <MyButton onClick={themeSwitch} id="themeBtn">
            Theme
          </MyButton>
          <MyButton onClick={logOut} id="logOut">
            Log out
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
