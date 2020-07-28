import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from './Card';

import fitness from '../assets/images/fitness.PNG';
import employee from '../assets/images/employee.PNG';
import team from '../assets/images/team.gif';
import burger from '../assets/images/burger.png';
import tourzing from '../assets/images/tourzing.PNG';
import planner from '../assets/images/planner.PNG';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Fitness Tracker',
                    imgSrc: fitness,
                    gitHubLink: 'https://github.com/WillV1/fitness-tracker',
                    appLink: 'https://fathomless-everglades-17524.herokuapp.com/?',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Employee Directory',
                    imgSrc: employee,
                    gitHubLink: 'https://github.com/WillV1/employee-directory',
                    appLink: 'https://willv1.github.io/employee-directory/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Team Generator',
                    imgSrc: team,
                    gitHubLink: 'https://github.com/WillV1/team-generator',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Burger',
                    imgSrc: burger,
                    gitHubLink: 'https://github.com/WillV1/burger',
                    appLink: 'https://blooming-retreat-74825.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'TourZing',
                    imgSrc: tourzing,
                    gitHubLink: 'https://github.com/WillV1/TourZing',
                    appLink: 'https://degrassi-syrup-05027.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Day Planner',
                    imgSrc: planner,
                    gitHubLink: '"https://github.com/WillV1/day-planner',
                    appLink: 'https://willv1.github.io/day-planner/index.html',
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