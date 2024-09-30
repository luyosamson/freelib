import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Subscribe Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full sm:w-1/3 rounded-md text-gray-900"
            />
            <button className="bg-orange-500 text-white p-2 rounded-md sm:ml-2 mt-4 sm:mt-0 w-full sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
    
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul>
              <li>Email: contact@freeread.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Location: 123 Book Street, Knowledge City</li>
            </ul>
          </div>
    
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-rose-600">Library</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600">My Account</a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-600">My Books</a>
              </li>
            </ul>
          </div>
    
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <FontAwesomeIcon icon={faXTwitter} size="2x" /> {/* X Icon */}
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" /> {/* Facebook Icon */}
              </a>
              <a href="#" className="text-red-600 hover:text-red-500">
                <FontAwesomeIcon icon={faYoutube} size="2x" /> {/* YouTube Icon */}
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedin} size="2x" /> {/* LinkedIn Icon */}
              </a>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-white my-4" />

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-500">
          <p>&copy; 2024 FreeRead. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
