import React from 'react'
import Nav from '../components/Navbar/Nav'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Personal from '../components/PersonalP/Personal'
import Services from '../components/Services/Services'
import Achievment from '../components/Achievements/Achievment'

export default function LandingPage() {
    return (
        <section>
            <Nav />
            <Hero />
            <About />
            <Personal />
            <Services />
            <Achievment />
        </section>
    )
}
