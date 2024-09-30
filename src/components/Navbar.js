

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="bg-stone-500 p-4"
      onMouseEnter={() => setIsMenuOpen(true)}  // Open menu on hover
      onMouseLeave={() => setIsMenuOpen(false)} // Close menu when hover ends
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left, responsive and close to the left margin */}
        <div className="text-white font-bold text-4xl md:text-3xl sm:text-2xl ml-2">
          FreeRead
        </div>

        {/* Navbar links for desktop */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <NavLink to="/" exact activeClassName="text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" activeClassName="text-yellow-400">
              Library
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-books" activeClassName="text-yellow-400">
              My Books
            </NavLink>
          </li>
          <li>
          <NavLink to="/login" activeClassName="text-yellow-400">
      <button className="w-full rounded-full bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
        Login
      </button>
    </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-white bg-gray-800 absolute left-0 w-full p-4">
          <li>
            <NavLink to="/" exact activeClassName="text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" activeClassName="text-yellow-400">
              Library
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-books" activeClassName="text-yellow-400">
              My Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName="text-yellow-400">
              Login
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
