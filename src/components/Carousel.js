import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import weather from '../assets/images/weather.PNG';
import planner from '../assets/images/planner.PNG';
import team from '../assets/images/team.gif';
import burger from '../assets/images/burger.png';
import tourzing from '../assets/images/tourzing.PNG';
import note from '../assets/images/note.PNG';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Weather Dashboard',
                    imgSrc: weather,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Work Day Scheduler',
                    imgSrc: planner,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Team Generator',
                    imgSrc: team,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Burger',
                    imgSrc: burger,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                {
                    id: 4,
                    title: 'TourZing',
                    imgSrc: tourzing,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Note Taker',
                    imgSrc: note,
                    gitHubLink: '',
                    appLink: '',
                    selected: false
                },
                // {
                //     id: 0,
                //     title: 'HomeMade',
                //     imgSrc: '',
                //     gitHubLink: '',
                //     appLink: '',
                //     selected: false
                // },
            ]

        }

    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {

        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
            
        )

    }

}

export default Carousel;