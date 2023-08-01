import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { Facebook, Instagram, Location, Logo, LogoFooter, Message, Phone, Tweeter, Youtube } from '../assets/Img/AllImages'
import { Link } from '@inertiajs/react'

const FooterNew = () => {
    return (
        <FooterStyle>
            <Container>
                <Row className='justify-content-between flex-sm-column-reverse flex-md-row flex-md-wrap'>
                    <Col xl={3} md={4} lg={4}>
                        <div className="footerHeading pt-3">
                            <h5>Get Connected</h5>
                        </div>
                        {/* <div className="footerIcon">
                            <ul>
                                <li><Link href="#"><img src={Facebook} alt="" /></Link></li>
                                <li><Link href="#"><img src={Instagram} alt="" /></Link></li>
                                <li><Link href="#"><img src={Youtube} alt="" /></Link></li>
                                <li><Link href="#"><img src={Tweeter} alt="" /></Link></li>
                            </ul>
                        </div> */}
                        <div className="footerLocation">
                            <div className="locationIcon">
                                <img src={Location} alt="" />
                            </div>
                            <div className="locationContent">
                                <span>26985 Brighton Lane, <br />
                                    Lake Forest, CA 92630</span>
                            </div>
                        </div>
                        <div className="footerContact">
                            <div className="contactIcon">
                                <img src={Phone} alt="" />
                            </div>
                            <div className="contactContent">
                                <span>+30-2106019311</span>
                            </div>
                        </div>
                        <div className="footerEmail">
                            <div className="messageIcon">
                                <img src={Message} alt="" />
                            </div>
                            <div className="meesageEmail">
                                <span>INFO@OPULENCCE.CO.UK</span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='my-5 my-md-0'>
                        <div className="footerLogo">
                            <img src={LogoFooter} alt="" />
                        </div>
                        <div className="footerCenterContent">
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                        </div>
                        <div className="footerCopyRight">
                            <span>Copyright © 2023  |  all rights reserved </span>
                        </div>
                        <div className="footerCreation d-none">
                            <span>- Developed by <a href="https://echtsol.com/" target='blank' className='cursor-default'>ECHTSOL</a></span>
                        </div>
                    </Col>
                    <Col xl={3} md={4} lg={4}>
                        <div className="footerLink mt-5 pt-4">
                            <ul>
                                <li><Link href="/product">SHOP</Link></li>
                                <li><Link href="/product">explore  benefits</Link></li>
                                <li><Link href="/product">accessories</Link></li>
                                <li><Link href="/about-us">about US</Link></li>
                                <li><Link href="/contact-us">contact US</Link></li>
                                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/return-policy">Return Policy</Link></li>
                                <li><Link href="/faqs">FAQs</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    background-color: #1C252E;
    color: #FFFFFF;
    padding: 60px 0px;
    @media (max-width: 576px){
        padding: 25px 0px;
    }
    .footerHeading{
        text-align: center;
        margin-bottom: 28px;
        margin-top: 60px;
        h5{
            font-size: 20px;
            line-height: 24.38px;
            font-family: 'M-M';
            text-transform: uppercase;
            margin-bottom: 0;
        }
        @media (max-width: 992px){
            h5{
                font-size: 18px;
            }
        }
        @media (max-width: 768px){
            margin-top: 30px;
            margin-bottom: 20px;
            h5{
                font-size: 20px;
            }
        }
        @media (max-width: 576px){
            h5{
                font-size: 18px;
            }
        }
        @media (max-width: 400px){
            h5{
                font-size: 16px;
            }
        }
    }
    .footerIcon{
        margin-bottom: 28px;
        text-align: center;
        li{
            margin-left: 21px;
            margin-right: 21px;
        }
        @media (max-width: 1200px){
            li{
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }
    .footerLocation{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-bottom: 28px;
        text-align: center;
        .locationIcon{
            margin-right: 12px;
        }
        .locationContent{
            span{
                font-size: 14px;
                line-height: 17.07px;
                font-family: 'M-M';
                letter-spacing: 0.16em;
                text-transform: uppercase;
            }
            @media (max-width: 992px){
                span{
                    font-size: 12px;
                }
            }
            @media (max-width: 400px){
                span{
                    font-size: 10px;
                }
            }
        }
    }
    .footerContact{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-bottom: 28px;
        text-align: center;
        .contactIcon{
            margin-right: 12px;
        }
        .contactContent{
            span{
                font-size: 14px;
                line-height: 17.07px;
                font-family: 'M-M';
                letter-spacing: 0.16em;
                text-transform: uppercase;
            }
            @media (max-width: 992px){
                span{
                    font-size: 12px;
                }
            }
            @media (max-width: 400px){
                span{
                    font-size: 10px;
                }
            }
        }
    }
    .footerEmail{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-bottom: 28px;
        text-align: center;
        .messageIcon{
            margin-right: 12px;
        }
        .meesageEmail{
            span{
                font-size: 14px;
                line-height: 17.07px;
                font-family: 'M-M';
                letter-spacing: 0.16em;
                text-transform: lowercase;
            }
            @media (max-width: 992px){
                span{
                    font-size: 12px;
                }
            }
            @media (max-width: 576px){
                span{
                    font-size: 10px;
                }
            }
        }
    }
    ul{
        list-style: none;
        padding-left: 0px;
        margin-bottom: 0px;
        li{
            display: inline-block;
        }
    }
    .footerLogo{
        margin-bottom: 35px;
        text-align: center;
        img{
            margin: 0 auto;
        }
    }
    .footerCenterContent{
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
        text-align: center;
        margin-bottom: 35px;
        h5{
            width: 92%;
            font-size: 14px;
            line-height: 17.07px;
            text-align: center;
            font-family: 'M-B';
            text-transform: uppercase;
            margin-bottom: 0px;
        }
        @media (max-width: 992px){
            h5{
                width: 100%;
                font-size: 12px;
            }
        }
        @media (max-width: 576px){
            h5{
                font-size: 10px;
            }
        }
    }
    .footerCopyRight,.footerCreation{
        margin-bottom: 30px;
        text-align: center;
        span{
            font-family: 'M-M';
            font-size: 14px;
            line-height: 17.07px;
            text-transform: uppercase;
        }
        @media (max-width: 992px){
            span{
                font-size: 12px;
            }
        }
    }
    .footerCreation{
        margin-bottom: 0px;
        text-align: center;
        span{
            letter-spacing: 0.16em;
            a{
                text-decoration: none;
                color: #fcfcf0;
                &:hover{
                    color: #fff;
                }
            }
        }
    }

    .footerLink{
        li{
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
            a{
                text-decoration: none;
                color: #fcfcf0;
                font-size: 16px;
                font-family: 'M-M';
                color: #FCFCF0;
                line-height: 19.5px;
                text-transform: uppercase;
            }
            @media (max-width: 992px){
                margin-bottom: 12px;
                a{
                    font-size: 14px;
                }
            }
            @media (max-width: 768px){
                margin-bottom: 10px;
                a{
                    font-size: 12px;
                }
            }
            @media (max-width: 576px){
                margin-bottom: 8px;
                a{
                    font-size: 10px;
                }
            }
        }
    }
`

export default FooterNew