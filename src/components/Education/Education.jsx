import React from 'react';
import "./education.css";
import Card from './Card.jsx';
import Card_detail from './Card_detail';

const Education = () => {
  return (
    <>
    <div className="Eduacation-Component">
        <h2 className="Edu-Heading">Education</h2>
         <hr className="Edu-hr"/>
        <div className="Education-Content">
            {
              Card_detail.map((value)=>{
               return (
                  <Card 
                     key={value.id}
                     iName={value.iName}
                     iYear={value.iYear}
                     iDegree={value.iDegree}
                     iper={value.iper}
                  />
               )
            })
            }
         </div>
    </div>
    </>
  )
}

export default Education;
