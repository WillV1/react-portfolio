import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Content from './Content'
import Hero from './Hero';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault ();

        this.setState({
            disabled: true
        })


        axios.post("https://send.pageclip.co/MbAlv33LmvORp4olJscMmxMY1JY9BlV8").then(function (response) {
            console.log(response);
          })
    }

    render() {

    return (
        <div className="background">
            <Hero title={this.props.title} subText={this.props.subText}/>

            <Content>
                <Form action="https://send.pageclip.co/MbAlv33LmvORp4olJscMmxMY1JY9BlV8" className="pageclip-form" method="post" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} />
                    </Form.Group>

                    <Button className="d-inline-block pageclip-form__submit" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                    </Button>


                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Form>
            </Content>
        </div>

    )
    }

}

export default ContactPage;