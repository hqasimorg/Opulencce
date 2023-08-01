import { Link } from "@inertiajs/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="copyRight">
                            <span>Copyright © 2023 | all rights reserved </span>
                        </div>
                    </Col>
                    {/* <Col md={2} className='d-none d-md-block'>
                        <div className="footerBtn">
                            <Link href="/product">Shop Now</Link>
                        </div>
                    </Col> */}
                    <Col md={6} className="text-end">
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/return-policy">
                                        Return Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faqs">FAQs</Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </FooterStyle>
    );
};

const FooterStyle = styled.footer`
    // width: 100%;
    // max-width: 3440px;
    // margin: 0 auto;
    padding: 25px 0;
    .row {
        align-items: center;
        position: relative;
        z-index: 1;
        &::before {
            content: "";
            position: absolute;
            top: -25px;
            left: 12.5px;
            width: calc(100% - 25px);
            height: 2px;
            border-radius: 100px;
            background-color: #1c252e;
            z-index: -1;
        }
        .footerBtn {
            text-align: center;
            margin-bottom: 60px;
            a,
            button {
                background-color: rgb(28, 37, 46);
                padding: 15px 44px;
                color: rgb(252, 252, 240);
                display: block;
                line-height: 20px;
                text-decoration: none;
                font-family: "M-M";
            }
            @media (max-width: 992px) {
                a {
                    font-size: 14px;
                    line-height: 17.07px;
                    padding: 15px 0;
                }
            }
        }
        @media (max-width: 992px) {
            .footerBtn {
                margin-bottom: 40px;
            }
        }
        nav {
            ul {
                list-style: none;
                padding: 0;
                margin: 0;
                li {
                    display: inline-block;
                    margin: 0px 15px;
                    line-height: 20px;
                    a {
                        text-decoration: none;
                        font-size: 16px;
                        font-family: "M-M";
                        color: #1c252e;
                        display: block;
                    }
                    @media (max-width: 992px) {
                        a {
                            font-size: 10px;
                            line-height: 12.19px;
                        }
                    }
                    @media (max-width: 768px) {
                        a {
                            font-size: 12px;
                            line-height: 15.19px;
                        }
                    }
                }
                li:nth-child(1) {
                    margin-right: 15px;
                    margin-left: 0px;
                }
            }
            @media (max-width: 768px) {
                ul {
                    text-align: center;
                }
            }
        }
        @media (max-width: 768px) {
            &::before {
                top: -30px;
                left: 12.5px;
            }
        }
    }
    @media (max-width: 768px) {
        padding: 35px 0;
    }
`;

export default Footer;
