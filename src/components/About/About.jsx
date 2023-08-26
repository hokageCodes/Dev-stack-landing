import React from 'react'
import './About.css'
import MyPhoto from '../../assets/images/myphoto.png'

export default function About() {
    return (
        <section className='about-container'>
            <div className="left-about-section">
                <img src={MyPhoto} alt="about photo" />
            </div>
            <div className="right-about-section">
                <h4>About Me</h4>
                <h2>Vivek Padia</h2>
                <p>I am a skilled <strong>Full Stack Developer</strong> with a strong focus on <strong>UI/UX design, </strong>. Proficient in <small>HTML, CSS, JavaScript, Python, R, Node.js, Flutter, React, Angular, Android development, Java, Ktolin, Iconic Cordova, Nest, </small> and <small>Tensorflow.</small></p>
                <p>I create visually stunning interfaces and seamless user experiences across platforms. With expertise in front-end, back-end, and mobile app development, I deliver dynamic applications. I am a proactive problem solver, quick learner, and collaborative team player. Passionate about staying updated with the latest technologies and driving business success. Download my resume to learn more.</p>
                <div className="resume">
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                    <a href="/">Download My Resume </a>
                </div>
            </div>
        </section>
    )
}
