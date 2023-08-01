import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'


const TopHeader = () => {
    return (
        <TopHeaderStyled>
            <Container>
                <Row>
                    <Col md={12}>
                        <center><span>CLEANS YOUR HOME AT HALF THE PRICE</span></center>
                    </Col>
                </Row>
            </Container>
        </TopHeaderStyled>
    )
}

const TopHeaderStyled = styled.div`
    background-color: #1C252E;
    padding: 12px 0px;
    // width: 100%;
    // max-width: 3440px;
    // margin: 0 auto;
    margin-bottom: 16px;
    span,a{
        color: #FCFCF0;
        text-decoration: none;
        font-size: 18px;
        line-height: 21.94px;
        font-family: 'M-M';
        font-style: normal;
        font-weight: 500;
    }
    @media (max-width:576px){
        span,a{
            font-size: 14px;
        }
    }
`

export default TopHeader