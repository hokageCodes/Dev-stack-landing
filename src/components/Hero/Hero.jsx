import React, { useEffect, useState } from 'react'
import HeroRight from '../../assets/images/hero-right.png'
import './Hero.css'

const typingTexts = [
    "Freelancer",
    "Frontend Dev",
    "Backend Dev"
];

export default function Hero() {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const textInterval = setInterval(() => {
            const text = typingTexts[currentIndex];
            if (currentText.length < text.length) {
                setCurrentText(text.substring(0, currentText.length + 1));
            } else {
                clearInterval(textInterval);
                setTimeout(() => {
                    setCurrentText("");
                    setCurrentIndex((currentIndex + 1) % typingTexts.length);
                }, 2000); // Delay before moving to the next text
            }
        }, 100);

        return () => {
            clearInterval(textInterval);
        };
    }, [currentText, currentIndex]);
    return (
        <section className='hero-container'>
            <div className="left-section">
                <h4>HELLO</h4>
                <h1>I'm <span>Vivek Padia, a</span> {currentText}</h1>
                <p>A highly <strong>organized, innovative</strong>, and <strong>goal-driven </strong>undergraduate with <strong>exceptional communication, problstrong solving</strong>, and <strong>leadership abilities</strong>, coupled with a <strong>passion</strong> for exploring the vast realm of<small> Information Technology</small></p>
                <div clsassName="hero-buttons">
                    <a className='main-btn' href="">See Projects</a>
                    <a className='secondary-btn'href="">See Designs</a>
                </div>
            </div>
            <div className="right-container">
                <img src={HeroRight} alt='hero right' />
            </div>
        </section>
    )
}
