import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { BannerContent, SliderBtn } from '../Components/Component'
import Slider from './Slider'

const Banner = () => {
    return (
        <BannerStyle>
            <Container>
                <Row className='flex-column-reverse flex-lg-row flex-lg-wrap bodyWhiteBg'>
                    <Col lg={5} xs={12}>
                        <BannerContent />
                    </Col>
                    <Col lg={7} xs={12}>
                        <div className="sliderBtn">
                            <Slider />
                            <SliderBtn />
                        </div>
                    </Col>
                </Row>
            </Container>
        </BannerStyle>
    )
}

const BannerStyle = styled.div`
    padding: 110px 0;
    width: 100%;
    max-width: 3440px;
    margin: 0 auto;
    @media (max-width:576px){
        padding: 60px 0;
    }
    @media (max-width:400px){
        padding: 40px 0 60px;
    }
`

export default Banner