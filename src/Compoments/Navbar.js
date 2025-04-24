import React from 'react';
import '../css/navbar.css'

import Toys from '../photos/toys.png'
import All from '../photos/all.png'
import Cafe from '../photos/cafe.png'
import Home from '../photos/home.png'
import Electronics from '../photos/electronics.png'
import Mobile from '../photos/mobile.png'
import Babystore from '../photos/baby.png'
import zone from '../photos/dealzone.png'
import Beauty from '../photos/beauty.png'
import Fashion from '../photos/fashion.png'
import Fresh from '../photos/fresh.png'

export default function Navbar(){
 return(
    <div className='Navbar'>
      <button className='Toys'>
        <img src={All} alt='All' />
        <span>All</span>
      </button>
      <button className='Toys'>
        <img src={Cafe} alt='Cafe' />
        <span>Cafe</span>
      </button>
      <button className='Toys'>
        <img src={Home} alt='Home' />
        <span>Home</span>
      </button>   
      <button className='Toys'>
        <img src={Toys} alt='toys' />
        <span>Toys</span>
      </button>
      <button className='Toys'>
        <img src={Electronics} alt='Electronics' />
        <span>Electronics</span>
      </button>
      <button className='Toys'>
        <img src={Mobile} alt='Mobile' />
        <span>Mobile</span>
      </button>
      <button className='Toys'>
        <img src={Babystore} alt='Babystore' />
        <span>Baby store</span>
      </button>
      <button className='Toys'>
        <img src={zone} alt='zone' />
        <span>Deal zone</span>
      </button>
      <button className='Toys'>
        <img src={Beauty} alt='Beauty' />
        <span>Beauty</span>
      </button>
      <button className='Toys'>
        <img src={Fashion} alt='Fashion' />
        <span>Fashion</span>
      </button>
      <button className='Toys'>
        <img src={Fresh} alt='Fresh' />
        <span>Fresh</span>
      </button>

    </div>

  );

}
    