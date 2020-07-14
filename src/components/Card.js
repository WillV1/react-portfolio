import React from 'react';
import CardInfo from './CardInfo'

function Card (props) {

    return (
        <div className="d-inline-block p-card" onClick={(e) => props.click(props.item)}>
            <img className="p-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} gitHubLink={props.item.gitHubLink} appLink={props.item.appLink}/>}
        </div>
    )
}

export default Card;