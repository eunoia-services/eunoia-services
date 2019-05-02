import React from 'react'
import '../css/CTA.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default ()=>(
    <section className='contact' id='contact'>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-uppercase'>Contact Us for a free Quote!</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={6} sm={12}>
                    <h3 className='text-uppercase'>Eunoia Services</h3>
                    <p>Our mission is to set the wages to cleaner and give services to client by providing bridge between two, client and cleaner, to accomplish cleanliness and sanitation around individuals for betterment of humankind.</p>
                </Col>
                <Col lg={6} sm={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Yash Tapodhan</h5>
                            <p>Address</p>
                            <p>+919725319493</p>
                            <p>eunoiaService77@gmail.com</p>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5>Operating Hours</h5>
                            <p>Mon - Fri: 8am - 8pm</p>
                            <p>Saturday: 9am - 7pm</p>
                            <p>Sunday: 9am - 8pm</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)