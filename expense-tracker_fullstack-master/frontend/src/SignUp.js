// SignUp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignUp = ({ onSignUp, link }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      // Gửi yêu cầu đăng ký đến server
      const response = await axios.post('http://localhost:3000/SignUp', {
        username,
        password,
      });

      // Xử lý thành công
      console.log(response.data.message);
      onSignUp(); // Chuyển đến trang đăng nhập hoặc thực hiện các hành động khác
    } catch (error) {
      // Xử lý lỗi
      console.error('Error during signup:', error.response?.data?.message || error.message);
      setError(error.response?.data?.message || 'Internal server error');
    }
  };

 

  return (
    <SignUpStyled>
      <SignUpForm>
        <h2>Sign Up</h2>
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
        <SignUpButton >Sign Up</SignUpButton>
        
      </SignUpForm>
    </SignUpStyled>
  );
};

const SignUpStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;

const SignUpForm = styled.div`
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

const SignUpButton = styled.button`
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

const ErrorText = styled.p`
color: red;
margin-bottom: 16px;
`;

export default SignUp;
