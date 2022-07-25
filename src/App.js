import React from 'react'
import Food from './components/food/Food';
import Hero from './components/hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Craft1 from './assets/craft1.jpg';
import Craft2 from './assets/craft2.jpg';
import Chicken from './assets/chicken.jpg';
import Burger from './assets/burger.jpg';
import HeroBG from './assets/hero-bg.jpg';


function App() {
  return (
    <div >
     <Navbar/>
     <Hero/>
     <Food bgImg1={Craft1} />
    </div>
  );
}

export default App;
