import React from 'react'
import './personal.css'

export default function Personal() {
    return (
        <section className='personal-portfolio-container'>
            <div className="personal-content">
                <h4>Professional Portfolio</h4>
                <h2>Transforming Ideas into Reality</h2>
                <p>As a highly skilled graphic designer and full stack developer, I have been passionately pursuing my career since 2019. With a strong focus on
                visual aesthetics and cutting-edge technologies, I have consistently delivered captivating designs and seamless user experiences. My portfolio
                showcases a diverse range of successful projects, demonstrating my expertise in both design and development. I invite you to explore my
                resume to gain a comprehensive understanding of my professional journey. Let's collaborate and bring your ideas to life!</p>
                <div className="portfolio-btn">
                    <a href="/">Check Out</a>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </section>
    )
}
