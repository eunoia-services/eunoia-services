import React from 'react'
import '../css/Services.css'

export default ()=>(
    <section className='services' id='about'>
        <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1>Our Services</h1>
                    </div>
                </div>
                <div className="row h-100">
                    <div className="home-clean col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Home<br/>Cleaning</p>
                    </div>
                    <div className="maid-service col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Maid<br/>Services</p>
                    </div>
                    <div className="window-washing col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Window<br/>Washing</p>
                    </div>
                    <div className="commercial-clean col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Commercial<br/>Cleaning</p>
                    </div>
                    <div className="move-in-clean col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Move-in/<br/>Move-out<br/>Cleaning</p>
                    </div>
                    <div className="carpet-clean col-12 col-lg-6 d-flex justify-content-start align-items-center">
                        <p>Carpet<br/>Cleaning</p>
                    </div>
                </div>
            </div>
    </section>
)