import React from 'react';
import Hero from './Hero';

function HomePage (props) {

    return (
        <Hero title={props.title} subTitle={props.subTitle} subText={props.subText}/>

    )


}

export default HomePage;