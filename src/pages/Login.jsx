import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import '../styles/Login.scss';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="Login">
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput required type="text" placeholder="Enter your username" />
        <MyInput required type="password" placeholder="Enter the password" />
        <MyButton addClass="login-btn">Login</MyButton>
      </form>
    </div>
  );
};

export default Login;
