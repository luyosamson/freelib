
import React, { useState } from 'react';
import Footer from './Footer'
import Image from './images/heroImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
    <div>
      <div className='heroSection'>
      <p>
      <h2>Enrich Your World With Books</h2>
      Discover, Learn and Grow with FreeRead.
      Access an endless library 
      of free books and fuel your 
      passion for reading today! </p>
        <img src={Image} alt='heroImage'/>
      <button>Browse More</button>
      <div className='socialMedia'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
      </div>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="bookName"></label>
          <input
            type="text"
            placeholder='Book Title'
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="authorName"></label>
          <input
            type="text"
            placeholder='Author Name'
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
          />
        </div>

        <button type="submit">Search</button>
      </form>
      </div>
      <div className='booktype'><h2>Types Of Books</h2>
      {bookTypes.map((team, index) => (
          <div key={index} className="team-member">
            <img src={team.image} alt={team.name} />
            <h4>{team.category}</h4>
            
          </div>
        ))}
      
      
      </div>

      <div>
      <h2>About Us</h2>
      <p>At FreeRead, we believe that knowledge should be accessible to all, which is why we provide free digital 
        copies of books <br/>to anyone with a passion for reading. Our platform offers a diverse collection of genres, 
        from classic literature to modern-day,<br/> bestsellers, ensuring that readers of all interests can find something
        they love. Whether you're a student, a casual reader,<br/>or a lifelong learner, FreeRead is committed 
        to breaking down barriers to knowledge,empowering individuals through the ,<br/>power of books,
         and fostering a global community of readers.</p>

<img src='/images/aboutus.png' alt='aboutImage'/>
      
      
      
      
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home
