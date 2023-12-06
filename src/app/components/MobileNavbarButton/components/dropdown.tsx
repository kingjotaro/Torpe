import React from 'react';
import { INavbarButton } from '../types';

function Dropdown({ isDropdownOpen, dropdownItems }:INavbarButton) {
  if (isDropdownOpen) {
   
  return (
    <div id= "dropdown-content" className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1">
        <ul className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
          {dropdownItems.map((dropdownItems, index) => (
            <li key={index} className='border rounded-md hover:bg-purple-600 py-1 px-2 bg-black text-white '>
              {dropdownItems}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}}

export default Dropdown;
