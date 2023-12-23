// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './login';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';

const Root = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <React.StrictMode>
      <GlobalStyle />
      {isLoggedIn ? (
        <GlobalProvider>
          <App onLogout={handleLogout} />
        </GlobalProvider>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
