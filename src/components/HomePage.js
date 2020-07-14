import React from 'react';
import Hero from './Hero';
import Content from './Content';

function HomePage (props) {

    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle}/>
        <Content>
        <h6>Name: William VanHook</h6>
        <h6>Colleges: University of Virginia; Mulhenberg College, University of North Carolina-Chapel Hill</h6>
        <h6>Phone Number: (919) 397-3157</h6>
        <h6>Email Address: <a href={"mailto:wmvanhook@gmail.com"}>wmvanhook@gmail.com</a></h6>
        <p>I am a Front End Web Developer with a background in accounting and education. I earned a certificate in Full-Stack Development from the University of North Carolina-Chapel Hill, where I developed proficiency in React, Node/Express, MongoDB, JavaScript and HTML5/CSS3.</p>
        <p>I am a methodical problem solver passionate about developing apps, with a focus on mobile-first design and development. My degrees in accounting and history have prepared me to approach problems with focus and a team-first attitude.</p>
        <p>With each project, I aim to understand how to best engage users for an impactful user experience.</p>
        <p>I’m eager to combine my analytical and communication skills with technical skills as part of a real-time problem solving, quality-driven team.</p>
        <h6>"To live a creative life, we must lose our fear of being wrong." --Anonymous</h6>
        </Content>
        </div>
    )


}

export default HomePage;