import React from 'react'
import Footer from './Footer'
import Image from './images/image1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Home() {
  return (
    <div>
      <div className='heroSection'>
      <p>
      <h2>Enrich Your World With Books</h2>
        Books have the power to change lives.
        Whether you're seeking wisdom, entertainment, <br/>or solace, our library has the perfect book for you.<br/>Dive into stories that resonate with 
        your soul and expand your understanding of the world. </p>
        <img src={Image} alt='heroImage'/>
      <button>Learn More</button>
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
      </div>
      <div className='booktype'>Book Type</div>
      <div>Best Selller Books</div>
      
      <Footer/>
    </div>
  )
}

export default Home
