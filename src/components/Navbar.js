import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MyBlog</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/posts"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Posts
          </Link>
          <Link
            to="/create-post"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Create Post
          </Link>
          <Link
            to="/login"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Signup
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <Link
          to="/posts"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Posts
        </Link>
        <Link
          to="/create-post"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Create Post
        </Link>
        <Link
          to="/login"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="block text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
