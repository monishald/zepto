import React from 'react'
import Header from './Compoments/Header'
import Navbar from './Compoments/Navbar'
import Product1 from './Compoments/Product1'
import Product from './Compoments/Product'
import Footer from './Compoments/Footer'
// import Parent from './Compoments/New'
// import Child from './Compoments/New1'
// import New from '../src/Compoments/New'


export const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Product/>
      <Product1/>
      <Footer/>
      {/* <Parent/> */}
      {/* <Child/> */}
      {/* <New/> */}
      
      
    </div>
  )
}
