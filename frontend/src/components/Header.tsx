import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.svg'; // Assuming logo.svg is in public folder

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-serif font-bold hover:text-secondary transition-colors duration-300">
          <img src={logo} alt="Restaurant Logo" className="h-8 w-8" />
          <span>The Grand Restaurant</span>
        </Link>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-lg font-medium hover:bg-accent transition-colors duration-300 ${
                    isActive ? 'bg-accent text-white' : 'text-white'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-lg font-medium hover:bg-accent transition-colors duration-300 ${
                    isActive ? 'bg-accent text-white' : 'text-white'
                  }`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservations"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-lg font-medium hover:bg-accent transition-colors duration-300 ${
                    isActive ? 'bg-accent text-white' : 'text-white'
                  }`
                }
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-md text-lg font-medium hover:bg-accent transition-colors duration-300 ${
                    isActive ? 'bg-accent text-white' : 'text-white'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;