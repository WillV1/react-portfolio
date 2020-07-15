import React from 'react';

import Hero from './Hero';
import Carousel from './Carousel';


function PortfolioPage (props) {

    return (
            <div className="background">
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Carousel />
            </div>

    )


}

export default PortfolioPage;