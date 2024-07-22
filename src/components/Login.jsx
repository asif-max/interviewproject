import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === username && storedUser.password === password) {
      onLogin();
      navigate('/dashboard'); 
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
