import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Banner, SectionHandle } from '../../Components/Component'

const ContactUsCom = () => {

    const ContactUsComContent = () => {
        return (
            <form action="" className='ContactUsForm'>
                <div className="privacyPolicySecContentHeading">
                    <h1>Send Your Message</h1>
                </div>
                <div className="form-group">
                    <input type="text" name='f_name' id='f_name' placeholder='First Name' />
                </div>
                <div className="form-group">
                    <input type="text" name='l_name' id='l_name' placeholder='Last Name' />
                </div>
                <div className="form-group">
                    <input type="email" name='email' id='email' placeholder='Email' />
                </div>
                <div className="form-group">
                    <input type="number" name='phone' id='phone' placeholder='Phone' />
                </div>
                <div className="form-group">
                    <textarea name="" placeholder='Message' id="" cols="30" rows="6"></textarea>
                </div>
            </form>
        )
    }

    return (
        <>

            <section className='aboutBanner'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Banner bannerHeading="Contact US" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='contactSection'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={6}>
                            <SectionHandle SectionHandlerHeading={ContactUsComContent()} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ContactUsCom