import React from 'react'

const Card = (props) => {
  return (
    <>
     <div className="Cards_Container">
       <div class="card">
          <span>{props.iYear}</span>
          <p>{props.iDegree}</p>
          <p>{props.iName}</p>
          <p>{props.iper}</p>
        </div>
     </div>
    </>
  )
}

export default Card;
