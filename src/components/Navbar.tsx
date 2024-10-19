import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Radio Communicator</Link>
        <div className="space-x-4">
          <Link to="/equipment" className="hover:text-blue-200">Equipment</Link>
          <Link to="/rental" className="hover:text-blue-200">Rental</Link>
          <Link to="/repair" className="hover:text-blue-200">Repair</Link>
          <Link to="/purchase" className="hover:text-blue-200">Purchase</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;