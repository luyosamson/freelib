import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const result = await response.json();
      console.log('Success:', result);
      setSuccessMessage('Login successful!'); // Set success message
      setErrorMessage(''); // Clear error message
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error.message); // Set error message
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white flex shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-1/2 hidden md:block">
          <img src="/images/login.jpg" alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-700 text-center">Login</h2>

          {/* Success and Error Messages */}
          {successMessage && (
            <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">
              {errorMessage}
            </div>
          )}

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder='user@gmail.com'
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              placeholder='Enter your password'
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition duration-300"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="/forgot-password" className="text-orange-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign Up Link */}
          <div className="mt-4">
            <p className="text-gray-600">
              Don't have an account? <a href="/register" className="text-orange-500 hover:underline">Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
