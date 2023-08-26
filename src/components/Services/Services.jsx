import React from 'react'
import './services.css'

export default function Services() {
    return (
        <section className='services-section'>
            <h4>Services</h4>
            <h2>Turning Concepts into Tangible Solutions</h2>
            <div className="service-cards-container">
                <div className="service-cards">
                    <div className="services">
                        <h3>01</h3>
                        <h4>UI/UX Design</h4>
                        <p>Harnessing the power of user-centric design, I create visually striking and
                        intuitive solutions that captivate
                        audiences.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="service-cards">
                    <div className="services">
                        <h3>02</h3>
                        <h4>Web Development</h4>
                        <p>Translating designs into dynamic and
                        interactive websites, I ensure seamless
                        functionality and exceptional user
                        experience.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="service-cards">
                    <div className="services">
                        <h3>03</h3>
                        <h4>Research & Analysis</h4>
                        <p>Uncovering valuable insights through
                        meticulous research and analysis, I
                        empower organizations to optimize
                        strategies and enhance performance.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
