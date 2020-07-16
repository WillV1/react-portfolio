import React from 'react';

import Hero from './Hero';
// import MERNCarousel from './MERNCarousel';


function MERNProjects (props) {

    return (
            <div className="background">
            <Hero title={props.title} subTitle={props.subTitle}/>
            {/* <MERNCarousel /> */}
            <p>Coming Soon!</p>
            </div>

    )


}

export default MERNProjects;