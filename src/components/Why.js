import React from 'react'
import '../css/Why.css'
import circle_ok from '../assets/icons/circle-ok.svg'
import env_fr from '../assets/icons/sunset.svg'
import happy from '../assets/icons/happy-face.svg'
import cal from '../assets/icons/calendar.svg'

export default ()=>(
    <section className='why'>
        <div className='container h-100'>
            <div className='row h-100 align-items-center'>
                <div className='col-12 text-center'>
                    <h1 className='title'>WHY CHOOSE US?</h1>
                </div>
            </div>
            <div className='row h-100 align-items-center'>
                <div className='col-12 col-lg-3 text-center'>
                    <img src={circle_ok} alt='tick-mark'/>
                    <h5>Certified Professional Cleaners</h5>
                </div>
                <div className='col-12 col-lg-3 text-center'>
                    <img src={env_fr} alt='sun-shining'/>
                    <h5>Environmentally Friendly Cleaning</h5>
                </div>
                <div className='col-12 col-lg-3 text-center'>
                    <img src={happy} alt='happy'/>
                    <h5>100% Satisfaction Guaranteed</h5>
                </div>
                <div className='col-12 col-lg-3 text-center'>
                    <img src={cal} alt='calender'/>
                    <h5>Available Evenings &amp; Weekends</h5>
                </div>
            </div>
        </div>
    </section>
)