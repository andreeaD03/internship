import React from 'react';
import SingleCard from '../singleCard/SingleCard';
import GreenCard from '../greenCard/GreenCard';
import "./Cards.css"

const Cards = () => {
  return (
    <div className='cards'>
      <div className='single-cards'>
          <SingleCard/>
          <SingleCard/>
          <SingleCard/>
      </div>

      <div className='green-card'>
        <GreenCard/>
      </div>
      
    </div>
  )
}

export default Cards
