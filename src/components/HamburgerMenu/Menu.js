import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div
        id="menu"
        className={`flex max-sm:flex-wrap gap-12 mr-12 text-sm text-gray-500 cursor-pointer font-medium`}
      >
        <div className="hover:text-blue-400">
          <NavLink
            to="signup"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
            }
          >
            Signup
          </NavLink>
        </div>
        <div className="hover:text-blue-600">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
            }
          >
            About
          </NavLink>
        </div>
        <div className="hover:text-blue-600">
          <NavLink
            to="products"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
            }
          >
            Products
          </NavLink>
        </div>
        <div className="hover:text-blue-600">
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
            }
          >
            Pricing
          </NavLink>
        </div>
        <div className="hover:text-blue-600">
          <NavLink
            to="support"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
            }
          >
            Support
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Menu;
