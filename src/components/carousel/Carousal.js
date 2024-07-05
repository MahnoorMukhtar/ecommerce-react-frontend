import React from 'react';
import {responsive, productData} from "./data"
import CarouselItem from './CarouselItem';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 

function Carousal() {
    return (
        <div>
            <Carousel 
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition="all 500ms ease"
            transitionDuration={1000}
            >
                {productData.map((item)=>(
                    <div key={item.id}>
                        <CarouselItem 
                        key={item.id}
                        imageUrl={item.imageurl}
                        price={item.price}
                        description={item.description}
                        name={item.name}
                        />
                    </div>
                    )
                )}
            </Carousel>
        </div>
    );
}

export default Carousal;