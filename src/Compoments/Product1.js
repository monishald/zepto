import React from 'react'
import '../css/product1.css'
import Image1 from '../photos/tea.webp'
import Image2 from '../photos/cafe.jpg'
import Image3 from '../photos/cream.jpg'
import Image4 from '../photos/drinks.jpg'

export default function Product1() {
  
    const product = [
        { 
            image : Image1,
            name:"Tea & coffee" 
        },
        {
            image : Image2,
            name:"Cafe"
        },
        {
            image : Image3,
            name:"Icecream"
        },
        {
          image : Image4,
          name:"Colddrinks"
        }
    ]
  return (
    <div className='NewImage'>
        <h3><strong>Snacks and Drinks </strong></h3>
        <div className='Drinks'>
       {
           product && product.length>0 && (
          <div className='Snacks'>
          {
            
             product.map((item, index) => (
              <div className='Image'>
              <img src={item.image} />
              {/* <p>{item.name}</p> */}
              </div>
          ))
          }
      
          </div>
         )
         }
       </div>

    </div>
  )
}
