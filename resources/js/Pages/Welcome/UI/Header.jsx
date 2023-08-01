import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Close, Logo } from '../assets/Img/AllImages'
import styled from 'styled-components'
import { Menu } from '../assets/Img/AllImages'
import { Link } from '@inertiajs/react'
import { useState } from 'react'

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <HeaderStyle>
            <Container>
                <Row>
                    <Col md={5} className='d-none d-lg-block'>
                        <nav>
                            <ul>
                                <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>Explore Benefits</Link></li>
                                <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>Accessories</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    <Col lg={2} xs={6}>
                        <div className="logo">
                            <Link href="/">
                                <img src={Logo} alt="" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} xs={6} className='text-end'>
                        <nav>
                            <ul>
                                <li><Link href="/about-us" className={window.location.pathname === "/about-us" ? "activeTab" : ""}>ABOUT US</Link></li>
                                <li><Link href="/contact-us" className={window.location.pathname === "/contact-us" ? "activeTab" : ""}>CONTACT US</Link></li>
                                <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>SHOP</Link></li>
                                <li className='d-block d-lg-none' onClick={() => { setMobileMenu(!mobileMenu) }}><img src={Menu} alt="" /></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
            {
                mobileMenu === true && (
                    <div className={mobileMenu === true ? "mobileMenu mobileMenuActive" : "mobileMenu"}>
                        <div className="mobileMenuBar">
                            <Col xs={12}>
                                <div className="logo">
                                    <Link href="/">
                                        <img src={Logo} alt="" />
                                    </Link>
                                    <div className="menuIcon">
                                        <img src={Close} alt="" onClick={() => { setMobileMenu(!mobileMenu) }} />
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <nav>
                                    <ul>
                                        <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>Explore Benefits</Link></li>
                                        <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>Accessories</Link></li>
                                        <li><Link href="/about-us" className={window.location.pathname === "/about-us" ? "activeTab" : ""}>ABOUT US</Link></li>
                                        <li><Link href="/contact-us" className={window.location.pathname === "/contact-us" ? "activeTab" : ""}>CONTACT US</Link></li>
                                        <li><Link href="/product" className={window.location.pathname === "/product" ? "activeTab" : ""}>SHOP</Link></li>
                                    </ul>
                                </nav>
                            </Col>
                        </div>
                    </div>
                )
            }
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    padding-bottom: 10px;
    // width: 100%;
    // max-width: 3440px;
    // margin: 0 auto;
    .row{
        align-items: center;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            bottom: -10px;
            left: 12.5px;
            background-color: #1C252E;
            width: calc(100% - 25px);
            height: 2px;
            border-radius: 100px;
        }
        .logo{
            img{
                margin: 0 auto;
            }
        }
        @media (max-width:992px) {
            .logo {
                text-align: start;
                img{
                    height: 20px;
                }
            }
        }
        @media (max-width:576px) {
            .logo {
                img{
                    height: 18px;
                }
            }
        }
    }
    nav{
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
            li{
                display: inline-block;
                margin: 0px 15px;
                line-height: 19.5px;
                a{
                    text-decoration: none;
                    font-size: 16px;
                    font-family: 'M-M';
                    color: #1C252E;
                    display: block;
                    text-transform: uppercase;
                }
                @media (max-width: 1200px){
                    a{
                        font-size: 14px;
                    }
                }
            }
            li:nth-child(1){
                margin-right: 15px;
                margin-left: 0px;
            }
            li:nth-child(3){
                margin-right: 0px;
                margin-left: 15px;
                a{
                    background-color: #1C252E;
                    padding: 9px 28px;
                    width: 104px;
                    height: 38px;
                    color: #FCFCF0;
                }
            }
            @media (max-width:992px) {
                display: flex;
                flex-flow: row wrap;
                justify-content: end;
                align-items: center;
                li{
                    display: none;
                }
                li:nth-child(3),li:nth-child(4){
                    display: block;
                }

                li:nth-child(3){
                    margin-right: 15px;
                    margin-left: 0px;
                }

                li:nth-child(4){
                    margin-right: 0px;
                }
            }
            @media (max-width:576px) {
                li:nth-child(3){
                    a{
                        font-size: 14px;
                        padding: 9px 20px;
                        text-align: center;
                        width: 85px;
                        height: 36px;
                    }
                }
            }
            @media (max-width:400px) {
                li:nth-child(3){
                    a{
                        font-size: 14px;
                        padding: 7px 20px;
                        text-align: center;
                        width: 85px;
                        height: 32px;
                    }
                }
            }
        }
    }
`

export default Header