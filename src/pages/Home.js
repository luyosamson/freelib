
import React, { useState } from 'react';
import Footer from './Footer'
import Image from './images/heroImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Home() {

const bookTypes=[
  {
  image:'/images/musculinity.png',
  category:'Masculinity',
  },
  {
    image:'/images/business.jpeg',
    category:'Business',
  },
  {
    image:'/images/history.jpg',
    category:'History',
  },
  {
    image:'/images/cen.jpg',
    category:'Leadership',
  },
  {
    image:'/images/selfDev.jpeg',
    category:'Self Development',
  },

]


//Search Books and author states
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log(`Searching for book: ${bookName} by author: ${authorName}`);
  };


  return (
    <div className='bg-rose-50'>
     <div>

      
     <div className="flex flex-col lg:flex-row items-center lg:items-start p-10">
  {/* Text Section */}
  <div className="lg:w-1/2 text-center lg:text-left">
    <h2 className="font-bold text-3xl lg:text-5xl text-rose-950">
      Enrich Your World With Books
    </h2>
    <p className="mt-4 text-green-700 text-lg lg:text-xl">
      Discover, Learn and Grow with FreeRead. <br />
      Access an endless library of free books <br />
      and fuel your passion for reading today!
    </p>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-10">
    <img
      src={Image}
      alt="heroImage"
      className="w-full h-auto lg:max-w-2xl lg:w-3/4"
      
    />
  </div>
</div>
<div>
<Link
  to="/library"
  className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg text-center lg:text-left ml-5"
>
  Browse More
</Link>


<div className="flex space-x-4 ml-5 mt-3">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500"
  >
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 ml-5"
  >
    <FontAwesomeIcon icon={faYoutube} size="2x" />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500"
  >
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>
  </div>
</div>
<form
  onSubmit={handleSearch}
  className="max-w-3xl mx-auto flex flex-col md:flex-row items-center space-y-2 md:space-y-0"
>
  <input
    type="text"
    placeholder="Book Title"
    id="bookName"
    value={bookName}
    onChange={(e) => setBookName(e.target.value)}
    required
    className="border border-gray-400 rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Author Name"
    id="authorName"
    value={authorName}
    onChange={(e) => setAuthorName(e.target.value)}
    required
    className="border border-gray-400 rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <button
    type="submit"
    className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md border border-gray-400"
  >
    Search
  </button>
</form>

      </div>
      <div className="booktype text-center bg-white">
  <h2 className="text-3xl font-bold mb-6 mt-5 text-rose-950">Types Of Books</h2>
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
    {bookTypes.map((team, index) => (
      <div key={index} className="team-member flex flex-col items-center">
        <img 
          src={team.image} 
          alt={team.category} 
          className="w-60 h-80 object-cover mb-4" // Increased size
        />
        <h4 className="text-lg font-semibold">{team.category}</h4>
      </div>
    ))}
  </div>
</div>


<div className="flex flex-col md:flex-row items-center justify-between">
  <div className="md:w-1/2 p-4">
    <h2 className="text-3xl font-bold mb-6 mt-5 text-rose-950 text-center">About Us</h2>
    <p className="text-lg leading-relaxed">
      At FreeRead, we believe that knowledge should be accessible to all, which is why we provide free digital 
      copies of books to anyone with a passion for reading. Our platform offers a diverse collection of genres, 
      from classic literature to modern-day bestsellers, ensuring that readers of all interests can find something
      they love. Whether you're a student, a casual reader, or a lifelong learner, FreeRead is committed 
      to breaking down barriers to knowledge, empowering individuals through the power of books, 
      and fostering a global community of readers.
    </p>
  </div>
  
  <div className="md:w-1/2 p-4">
    <img 
      src="/images/aboutus.png" 
      alt="aboutImage" 
      className="w-full h-auto object-cover" 
    />
  </div>
</div>

      
      <Footer/>
    </div>
  )
}

export default Home
