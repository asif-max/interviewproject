import React from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyInfo = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button
          onClick={handleNavigateToDashboard}
          className="absolute top-4 right-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Back to Dashboard
        </button>
        <h2 className="text-2xl font-bold mb-4">Company Info</h2>
        <p><strong>Company:</strong> Geeksynergy Technologies Pvt Ltd</p>
        <p><strong>Address:</strong> Sanjayanagar, Bengaluru-56</p>
        <p><strong>Phone:</strong> XXXXXXXXX09</p>
        <p><strong>Email:</strong> XXXXXX@gmail.com</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
