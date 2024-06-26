import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (email.trim() !== '' && password.trim() !== '') {
      onLogin(email);
      history.push('/akun');
    } else {
      alert('Email dan Password harus diisi!');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: 'url("/images/f1.jpeg")' }}>
      <form
        onSubmit={handleLogin}
        style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', backgroundColor: 'white' }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required // Adding the required attribute for HTML5 form validation
        />
        <label style={{ display: 'block', marginBottom: '10px' }} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          required // Adding the required attribute for HTML5 form validation
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
