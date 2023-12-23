// Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import SignUp from './SignUp';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập
    if (username === 'admin' && password === '123') {
      // Nếu đúng, gọi hàm `onLogin` để chuyển đến ứng dụng chính
      onLogin();
    } else {
      // Nếu sai, hiển thị thông báo lỗi
      setError('Invalid username or password');
    }
  };
  
  return (
    <LoginStyled>
      <LoginForm>
        <h2>Login</h2>
        {error && <ErrorText>{error}</ErrorText>}
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>Login</LoginButton>
        
        {/* <SignUpButton link = {"./SignUp"}>Sign Up</SignUpButton> */}
      </LoginForm>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const LoginButton = styled.button`
  background-color: rgba(34, 34, 96, 1);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  

  &:hover {
    background-color: #45a049;
  }
`;
// const SignUpButton = styled.button`
//   background-color:rgba(34, 34, 96, .6);
//   color: white;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   float:right;
  

//   &:hover {
//     background-color: #45a049;
//   }
// `;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 16px;
`;

export default Login;
