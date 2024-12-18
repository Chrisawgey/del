import React, { useState } from 'react';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store the auth token
        window.location.href = '/admin-panel'; // Redirect to the admin panel
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Login</h1>
      <div className="admin-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="admin-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
        />
        <button onClick={handleLogin} className="admin-login-button">
          Log In
        </button>
        {error && <p className="admin-error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Admin;
