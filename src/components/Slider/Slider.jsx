import React, { useState } from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { HiArrowSmLeft } from "react-icons/hi";
import "./Slider.scss"

function Slider() {

    const [currentSlider,setCurrentSlider] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/159395/pokemon-pokemon-go-phone-game-159395.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ];

    const prevSlide = () =>{
        setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev-1);
    }

    const nextSlide = () =>{
          setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);  
    }

  return (
    <div className='slider'>
      <div className='container' style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
          <img src={data[0]} alt="" />
          <img src={data[1]} alt="" />
          <img src={data[2]} alt="" />
      </div>
      <div className='icons'>
      <div className="icon" onClick={prevSlide}>
       <HiArrowSmLeft/>
      </div>
      <div className="icon" onClick={nextSlide}>
        <HiArrowSmRight/>
      </div>
      </div>
    </div>
  )
}

export default Slider
