import React, { useState } from "react";
import styled from "styled-components";

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    // Perform sign-up validation
    if (username.trim() === "") {
      setError("Username is required");
      return;
    }

    if (password.trim() === "") {
      setError("Password is required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Call the onSignUp function to handle the sign-up logic
    onSignUp(username, password);
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignUpButton onClick={handleSignUp}>Sign Up</SignUpButton>
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