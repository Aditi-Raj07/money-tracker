import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Navbar = ({ user, activeMenu }) => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              YourLogo
            </Link>
          </div>

          {/* Right side - User info */}
          <div className="ml-4 flex items-center md:ml-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user.name || user.email}</span>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">
                    {user.name?.charAt(0) || user.email?.charAt(0)}
                  </span>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;