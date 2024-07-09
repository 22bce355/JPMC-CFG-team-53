import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddFellowForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);
const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFellowData = {
      name,
      email,
      password,
      photo
    };
    console.log('Submitted data:', newFellowData);
    setName('');
    setEmail('');
    setPassword('');
    setPhoto(null);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  function eventHandler(){
    navigate('/fellow');
  }

  return (
    <div className="flex flex-col w-full max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl text-white mb-4">Add Fellow</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-gray-300 mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm text-gray-300 mb-2">Photo:</label>
          <input
            type="file"
            id="photo"
            accept=".jpg, .jpeg, .png"
            onChange={handlePhotoChange}
            required
            className="bg-gray-700 rounded-md w-full p-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button onClick={eventHandler} type="submit" className="bg-blue-500 py-3 px-4 rounded-md font-medium text-white hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddFellowForm;
