// src/components/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBlog</h1>
          <p className="text-lg mb-8">Share your thoughts and ideas with the world.</p>
          <a href="/signup" className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-md text-lg font-semibold hover:bg-yellow-600">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
              <p className="text-gray-700">Our platform is designed with simplicity in mind. Get started quickly and easily.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Customizable</h3>
              <p className="text-gray-700">Personalize your blog with a range of themes and settings to fit your style.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-700">Connect with other bloggers and get support from our vibrant community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
