import React from 'react';
import './FoodStyle.css';


const Food = (props) => {
   

  return (
    <div className='food'  >
    <div>
        <div className='chicken'></div>
    </div>
        <div className='container'>
            <div  className='left' ></div>
             <div   className='right' ></div>
        </div>
        <div className='container'>
        <div className='left' ></div>
        <div  className='right' ></div>
    </div>
    </div>
  )
}

export default Food;