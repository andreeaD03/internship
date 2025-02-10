import React from 'react';
import "./SingleCard.css";

const SingleCard = () => {
  return (
    <div className='card-solo'>
      <div className='package'>
        <h2>Basic</h2>
      </div>

      <div className='description-package'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis delectus voluptates molestiae!
      </div>

      <div className='price'>
        499$
      </div> 
    </div>
  )
}

export default SingleCard
