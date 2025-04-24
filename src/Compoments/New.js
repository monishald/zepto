import React from 'react'
import Child from './New1'

// export default function New() {

  const Parent=()=>
  {
    const People=[
        {
          name:"Monisha",
          age:24
        }
    ];
  return (
     
    <Child Peoples={People}/>
    // <Child name="Monisha" age={23}/>
  )}
// }
export default Parent
