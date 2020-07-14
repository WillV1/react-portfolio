import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo (props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div className="p-card-info" style={style}>
            <p className="p-card-title">{props.title}</p>
            <p><a href={props.gitHubLink} target="_blank" rel="noopener noreferrer" className="p-card-link">GitHub</a></p>
            <p><a href={props.appLink} target="_blank" rel="noopener noreferrer" className="p-card-link">Deployed App</a></p>
        </animated.div>
    )
}

export default CardInfo;