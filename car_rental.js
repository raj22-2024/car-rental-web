1. Initialize a React App:

npx create-react-app car-rental-app
cd car-rental-app
npm install react-router-dom@6 tailwindcss postcss autoprefixer
npx tailwindcss init -p


2. Configure Tailwind in tailwind.config.js:

module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


3. Import Tailwind in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;




---

3. Code for Components and Pages


---

App.js

Handles routing and layout.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


---

Navbar.js

Responsive navigation bar.

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl">CarRental</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link to="/cars" className="text-white">Cars</Link>
          </li>
          <li>
            <Link to="/booking" className="text-white">Booking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


