import React from 'react'
import '../css/product.css'
import Image1 from '../photos/fruits.jpg'
import Image2 from '../photos/bread.jpg'
import Image3 from '../photos/th.jpg'
import Image4 from '../photos/dry fruits.jpg'
import Image5 from '../photos/th (1).jpg'



export default function Product() {

    // const studentData = {
    //     name : "monisha",
    //     course : "full stack"
    // }

    // console.log("stident name is",studentData.course)

    // const a = [20 , 78, 56 , 89 , 7 ,45 , 89]

    // console.log("a value is",a[4])

    // const courseData = ["MERN stack" , "data science" , "python full stack" , "java full stack" , "AL-ML","AI-DS"]
    // console.log("course Details",courseData[5])


    // const CollegeData = [
    //     {
    //         collgeBName: "Indian Institute of Technology Bombay",
    //         collgeFees: "₹2,00,000 per year",
    //         place: "Mumbai, Maharashtra"
    //     },
    //     {
    //         collgeBName: "Delhi University - St. Stephen's College",
    //         collgeFees: "₹40,000 per year",
    //         place: "New Delhi"
    //     },
    //     {
    //         collgeBName: "Manipal Institute of Technology",
    //         collgeFees: "₹3,25,000 per year",
    //         place: "Manipal, Karnataka"
    //     },
    //     {
    //         collgeBName: "Christ University",
    //         collgeFees: "₹1,85,000 per year",
    //         place: "Bangalore, Karnataka"
    //     }
    // ];

    // console.log("college information",CollegeData[1].collgeBName)

    // const collgeNames = CollegeData.map((item) => item.collgeBName);
    // console.log("College Names:", collgeNames);
    // const collgeName = CollegeData.map((item) => item.collgeFees);
    // console.log("College Names:", collgeName);
    

    const product = [
        {
            image : Image1
        },
        {
            image : Image2
        },
        {
            image : Image3
        },
        {
            image : Image4
        },
        {
            image : Image5
        }
        
    ]



return (
    <div className='Image'>
        <h3><strong>Grocery & Shopping</strong></h3>

        {/* {
            CollegeData && CollegeData.length > 0 && (
                <div>
                    {
                        CollegeData.map((item,index)=>
                            <p>{item.collgeBName}</p>
                        )
                    }
                </div>
            )
        } */}

        <div className='Grocery'>

            {
                product && product.length>0 && (
                    <div className='Shop'>
                    {
                       product.map((item, index) => (
                        <img src={item.image} />
                      ))
                    }
                  
                  </div>
                )
            }
            </div> 

    </div>
  )
}
