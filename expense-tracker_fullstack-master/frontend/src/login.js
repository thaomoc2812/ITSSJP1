import React, { useState } from 'react';
import styled from 'styled-components';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [DisplayeUsername, setDisplayUsername] = useState('');
  const [error, setError] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatchError, setPasswordMismatchError] = useState(false);

  const handleLogin = () => {
    // Check login credentials
    if (username === 'hbet88' && password === '123') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSignUp = () => {
    if (signUpUsername && signUpPassword && signUpPassword === confirmPassword) {
      alert('Sign up successful');
      setShowSignUp(false);
    } else {
      setPasswordMismatchError(true);
    }
  };

  return (
    <LoginStyled>
      {!showSignUp && (
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
          <SignUpButton onClick={handleSignUpClick}>
            {showSignUp ? 'Cancel' : 'Sign Up'}
          </SignUpButton>
        </LoginForm>
      )}
      {showSignUp && (
        <SignUpForm>
          <h2>Sign Up</h2>
          <label htmlFor="signup-username">Username:</label>
          <input
            type="text"
            id="signup-username"
            value={signUpUsername}
            onChange={(e) => setSignUpUsername(e.target.value)}
          />
          <label htmlFor="signup-username">Display Name:</label>
          <input
            type="text"
            id="display-name"
            value={DisplayeUsername}
            onChange={(e) => setDisplayUsername(e.target.value)}
          />
          <label htmlFor="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <label htmlFor="signup-confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="signup-confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordMismatchError && (
            <ErrorText>Password and confirmation do not match</ErrorText>
          )}
          <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
        </SignUpForm>
      )}
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
const SignUpButton = styled.button`
  background-color:rgba(34, 34, 96, .6);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  float:right;
  

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 16px;
`;

export default Login;
