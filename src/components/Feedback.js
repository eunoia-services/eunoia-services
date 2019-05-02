import React from 'react'
import '../css/Feedback.css'
import Carousel from 'react-bootstrap/Carousel'

export default ()=>(
    <section className='reviews'>
        <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1>What do our customers say?</h1>
                    </div>
                </div>
            </div>
            <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                    <Carousel>
                        <Carousel.Item>
                            {/* <img className="d-block w-100"
                            src="#"
                            alt="First reviewer"
                            /> */}
                            <Carousel.Caption>
                                <h3>First Reviewer</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            {/* <img className="d-block w-100"
                            src="#"
                            alt="Second reviewer"
                            /> */}
                            <Carousel.Caption>
                                <h3>Second Reviewer</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            {/* <img className="d-block w-100"
                            src="#"
                            alt="Third reviewer"
                            /> */}
                            <Carousel.Caption>
                                <h3>Third Reviewer</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
            </div>
    </section>
)