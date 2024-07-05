import React, { useEffect, useState } from 'react';
import { sliderData } from './sliderData';
import "./Slider.scss"
import { useNavigate } from "react-router-dom"
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

function Slider(props) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const isAuto = true
    let slideIntervel;
    const intervel = 5000

    useEffect(()=>{
        setCurrentSlide(0)
    }, [])

    useEffect(()=>{
        if(isAuto){
            const auto = ()=>{
                slideIntervel = setInterval(nextSlide, intervel);
                }
            auto();
       } 
        console.log("intervel", slideIntervel)
        return()=> clearInterval(slideIntervel)
    

    }, [currentSlide, isAuto, intervel])


    const slideLength = sliderData.length

    const navigate = useNavigate()

    const prevSlide = ()=>{

        setCurrentSlide(currentSlide === 0 ? slideLength-1 : currentSlide-1)
        console.log("current", currentSlide)
    }

    const nextSlide = ()=>{     
        setCurrentSlide(currentSlide === slideLength-1 ? 0: currentSlide+1)
        console.log("current", currentSlide)

        }
    return (
            <div className='slider'>
                <IoIosArrowDropleft size={30} onClick={prevSlide} className='arrow prev' />
                <IoIosArrowDropright size={30} onClick={nextSlide} className='arrow next'/>
                {sliderData.map((slide, index)=>{
                    const {image, heading, desc} = slide
                        return(
                            <div key={index} className={index === currentSlide ? "slide current" : "slide"}>
                                {index === currentSlide && (
                                    <>
                                        <img className='slide_img' src={image} alt=""/> 
                                        <div className='content'>
                                            <span className='span1'></span>
                                            <span className='span2'></span>
                                            <span className='span3'></span>
                                            <span className='span4'></span>
                                            <h1 className=''>{heading}</h1>
                                            <p>{desc}</p>
                                            <hr/>
                                            <button className='-btn -btn-primary' onClick={()=>navigate("/shop")}>
                                                Shop now
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        )                        

                })}
            </div>
    );
}

export default Slider;