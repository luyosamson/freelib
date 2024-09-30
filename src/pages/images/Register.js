import React, { useState } from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [photo, setPhoto] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [warning, setWarning] = useState('');

  const categories = ['Masculinity', 'Business', 'History', 'Self Development', 'Leadership'];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
      setWarning(''); // Clear warning when a category is deselected
    } else if (selectedCategories.length < 2) {
      setSelectedCategories([...selectedCategories, category]);
      setWarning(''); // Clear warning when a valid selection is made
    } else {
      setWarning('You can only select up to 2 categories.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password confirmation logic
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('password', password);
    formData.append('photo', photo);
    formData.append('categories', JSON.stringify(selectedCategories));

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      // Handle successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle registration error
    }
  };

  return (
    <div className="container mx-auto p-4">
     
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <h2 className="text-4xl font-bold mb-4 text-center">Register</h2>
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-1">First Name:</label>
            <input 
              type="text" 
              id="firstName" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-1">Last Name:</label>
            <input 
              type="text" 
              id="lastName" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Email, Country, and City */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="country" className="block mb-1">Country:</label>
            <input 
              type="text" 
              id="country" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="city" className="block mb-1">City:</label>
            <input 
              type="text" 
              id="city" 
              value={city} 
              onChange={(e) => setCity(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Password and Confirm Password */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="block mb-1">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="flex items-center mb-4">
          <label htmlFor="photo" className="block mr-2">Upload Passport Size Photo:</label>
          <input 
            type="file" 
            id="photo" 
            accept="image/*" 
            onChange={(e) => setPhoto(e.target.files[0])} 
            required 
            className="border border-gray-400 p-2 w-full rounded"
          />
          <div className="ml-2 text-gray-600">
            <i className="fas fa-cloud-upload-alt"></i> {/* Cloud upload icon */}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Select Categories:</h3>
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <label key={category} className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes(category)} 
                  onChange={() => handleCategoryChange(category)} 
                  className="mr-2" 
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Warning Message */}
        {warning && <p className="text-red-500 mb-2">{warning}</p>}

        {/* Register Button */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
