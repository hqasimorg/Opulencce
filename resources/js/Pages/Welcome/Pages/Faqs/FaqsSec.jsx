import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Banner, SectionHandle } from '../../Components/Component'
import FaqSec from '../Product/ProductFaq'

const FaqsSec = () => {

    const FaqSecHeadingSec = () => {
        return (

            <div className="privacyPolicySecContentHeading">
                <h1>The Smart Way To Clean Your Home</h1>
            </div>
        )
    }

    const FaqsSecContent = () => {
        return (
            <FaqSec FaqSecHeading={FaqSecHeadingSec()} />
        )
    }

    return (
        <>

            <section className='aboutBanner'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <Banner bannerHeading="FAQs" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <FaqsSecStyled>
                <Container>
                    <Row>
                        <Col md={12}>
                            <SectionHandle SectionHandlerHeading={FaqsSecContent()} />
                        </Col>
                    </Row>
                </Container>
            </FaqsSecStyled>
        </>
    )
}

const FaqsSecStyled = styled.section`
    padding: 60px 0px;
`

export default FaqsSec