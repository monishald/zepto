import React from 'react'

// const Child = ({ name,age }) => {
//   return (
//     <div>
//      <p>{name}</p>
//      <p>{age}</p>
//     </div>
//   )
// }


const Child = ({ Peoples }) => {
  return (
    <div>
      <h2>People List</h2>
      {
        Peoples.map((person, index) => (
          <div key={index}>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Child;
