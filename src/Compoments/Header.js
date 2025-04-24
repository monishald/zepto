import React from 'react';
import Zeptologo from '../photos/Zepto.jpg';
import '../css/header.css'
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='Head'>
      <div className='Logo'>
        <img src={Zeptologo} alt='Zepto Logo' />
      </div>

      <div className='SearchBar'>
        <FaSearch className='search-icon' />
        <input type='text' placeholder='Search...' />
      </div>

      <div className='Buttons'>
        <button>Login</button>
        <button>Cart</button>
      </div>
    </div>
  );
}
