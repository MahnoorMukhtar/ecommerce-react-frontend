import React from 'react';
import "./Home.scss"
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const data=[
    {
        icon: <MdLocalShipping size={30}  color="#6495ad"/>, 
        heading: "Free Shipping",
        desc: "We offer free shipping to special products."
    },
    {
        icon: <RiSecurePaymentLine size={30}  color="orange"/>,
        heading: "Secure Payment",
        desc: "Make secure payment for your product."
    },{
        icon: <MdProductionQuantityLimits size={30}  color="purple"/>,
        heading: "Quality Products",
        desc: "We sell products from only tested and proven brands."
    },{
        icon: <FiClock size={30}  color="cyan"/>,
        heading: "24/7",
        desc: "Get access to support from our exprt support team."
    },
]

function HomeInfoBox() {

    return (
        <div className='infoboxes'>
            {data.map((item, index)=>{
                const {icon,heading,desc}=item;
                return(
                    <div className='infobox' key={index}>
                        <div className='icon'>
                            {icon}
                        </div>
                        <div className='text'>
                            <h2>{heading}</h2>
                            <p className='info-para'>{desc}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    );
}

export default HomeInfoBox;