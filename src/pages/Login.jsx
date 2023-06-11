import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';
import '../styles/Login.scss';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput required type="text" placeholder="Username" />
        <MyInput required type="password" placeholder="Password" />
        <MyButton addClass="login-btn">Login</MyButton>
      </form>
      <div id="hint">
        <p>You can enter any username and password :)</p>
      </div>
    </div>
  );
};

export default Login;
