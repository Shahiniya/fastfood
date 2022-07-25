import React from 'react'
import './herostyle.css';


const Hero = () => {
  return (
    <div className='hero'>
        <div className='container1'>
            <div className='content'>
                <div className='text'>
                    <p>Always</p>
                </div>
                  <h1>Served</h1>
                  <h1 className='span'>Fresh</h1>
                  <h1>Daily</h1>
                  <button className='btn btn1' >Delivery</button> <br/>
                  <button className='btn btn2' >Take-out</button>
            </div>
        </div>
    </div>
  )
}

export default Hero;