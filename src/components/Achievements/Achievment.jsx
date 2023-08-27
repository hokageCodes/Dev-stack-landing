import React from 'react'
import './achievment.css'
import Code from '../../assets/svgs/code.svg'
import Glass from '../../assets/svgs/glass.svg'
import Gift from '../../assets/svgs/gift.svg'
import Smile from '../../assets/svgs/smile.svg'

export default function Achievment() {
    return (
        <section className='achievment-container'>
            <div className="achievment-content">
                <h4>Impressive Track record</h4>
                <h2>Demonstrating Excellence</h2>
                <div className="each-acheivment">
                    <div className="acheivment">
                        <img src={Code} alt='' />
                        <h4>Completed Projects</h4>
                    </div>
                    <div className="acheivment">
                        <img src={Glass} alt='' />
                        <h4>Projects In Progress</h4>
                    </div>
                    <div className="acheivment">
                        <img src={Gift} alt='' />
                        <h4>Awards Received</h4>
                    </div>
                    <div className="acheivment">
                        <img src={Smile} alt='' />
                        <h4>Satisfied Clients</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
