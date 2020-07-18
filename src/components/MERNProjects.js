import React from 'react';

import Hero from './Hero';
import MERNCarousel from './MERNCarousel';


function MERNProjects (props) {

    return (
            <div className="background">
            <Hero title={props.title} subTitle={props.subTitle}/>
            <MERNCarousel />
            </div>

    )


}

export default MERNProjects;