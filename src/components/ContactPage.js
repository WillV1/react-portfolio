import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Content from './Content'
import Hero from './Hero';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <div className="background">
                <Hero title={this.props.title} subText={this.props.subText} />


                <Content>
                    <Form onSubmit={this.submitForm} action="https://formspree.io/xvowvdjq" method="POST">
                        <Form.Group>
                            <Form.Label htmlFor="name">Full Name</Form.Label>
                            <Form.Control type="text" name="name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Email</Form.Label>
                            <Form.Control type="email" name="email" value={this.state.email} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control  as="textarea" rows="5" name="message" value={this.state.message} />
                        </Form.Group>

                        {status === "SUCCESS" ? <p>Thanks!</p> : <Button type="submit" variant="primary">Submit
                    </Button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </Form>
                </Content>
            </div>

        )
    }

}

export default ContactPage;