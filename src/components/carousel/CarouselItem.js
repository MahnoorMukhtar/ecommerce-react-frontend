import React from 'react';
import { Link } from 'react-router-dom';
import "./Carousel.scss"
import { shortenText } from '../../utils';


function CarouselItem(props) {

    const {name, price, imageUrl, description} = props

    // console.log("props", props)
    return (
        <div className='carousal-item'>
            <Link>
                <img className='carouselImage' src={imageUrl} alt='procuct' />
                <p className='price'>{price}</p>
                <h4>{shortenText(name, 18)}</h4>
                <p className='desc'>{shortenText(description, 26)}</p>
            </Link>
            <button className='-btn'>
                Add to cart
            </button>
        </div>
    );
}

export default CarouselItem;