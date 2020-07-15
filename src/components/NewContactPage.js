import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Content from './Content'
import Hero from './Hero';


class NewContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        axios({
            method: "POST",
            url: "http://localhost:3030/api/email",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {

        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (

            <div className="background">
                <Hero title={this.props.title} subText={this.props.subText} />

                <Content>
                    <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Content>
            </div>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
}

export default NewContactPage;