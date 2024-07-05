import React from 'react';
import Slider from '../../components/slider/Slider';
import HomeInfoBox from './HomeInfoBox';
import Carousal from '../../components/carousel/Carousal';
import ProcuctCategory from './ProcuctCategory';
import FooterLinks from '../../components/Footer/FooterLinks';


const PageHeading = ({heading, btn})=>{
    return(
        <>
        <div className='d-flex justify-content-between'>
                <h1>{heading}</h1>
                <button className='-btn'>
                    {btn}
                </button>
        </div>
        <hr style={{width: "100%"}} />
        </>
    )
}

function Home(props) {

    return (
        <div>
            <Slider/>
            <section>
                <div className='container'>
                    <HomeInfoBox/>
                    <PageHeading heading={"Latest Product"} btn={"Shop Now>>>"} />
                    <Carousal/>
                </div>
            </section>
            <section className='-bt-grey p-5 mt-0'>
                <div className='container'>
                    <h2>Categories</h2>
                    <ProcuctCategory/>
                </div>
            </section>
            <section className='pt-5'>
                <div className='container'>
                    <PageHeading heading={"Mobile Phones"} btn={"Shop Now>>>"} />
                    <Carousal/>
                </div>
            </section>
            <section className='bg-blue'>
                <div className='container'> 
                    <FooterLinks/>
                </div>
            </section>
        </div>
    );
}

export default Home;