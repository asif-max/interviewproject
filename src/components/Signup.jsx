import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && email && password && phone && profession) {
      
      localStorage.setItem('user', JSON.stringify({ name, email, password, phone, profession }));
      navigate('/login');
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <select
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      >
        <option value="">Select Profession</option>
        <option value="Engineer">Engineer</option>
        <option value="Doctor">Doctor</option>
        <option value="Artist">Artist</option>
      </select>
      <button
        onClick={handleSubmit}
        className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
