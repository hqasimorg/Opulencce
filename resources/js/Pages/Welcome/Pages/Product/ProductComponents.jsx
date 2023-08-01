import React, { useRef } from "react";
import { AddCartSec, ReviewSec, SignInForm } from "../../Components/Component";
import { Logo, Star, StarFill } from "../../assets/Img/AllImages";
import { Col, Container, Row } from "react-bootstrap";
import SliderProduct from "../../UI/SliderProduct";
import styled from "styled-components";
import { BlueSection } from "../../assets/Data/Data";
import FaqSec from "./ProductFaq";
import { Link } from "@inertiajs/react";
import videoPop1 from "../../../../../../public/assets/img/video/video-pop.mp4";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

const ProductComponents = () => {
    const videoRef = useRef(false);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Play the video
                videoRef.current.play();
            } else {
                // Pause the video
                videoRef.current.pause();
            }
        });
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust the threshold value as per your needs
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Clean up the observer
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const ProductsSecHeadingSec = () => {
        return (
            <div className="faqSecHeading">
                <h2>The Smart Way To Clean Your Home</h2>
            </div>
        );
    };

    return (
        <>
            <ProductStyle>
                <Container>
                    <Row>
                        <Col md={6} className="mb-5 mb-md-0">
                            <AddCartMain className="d-block d-md-none">
                                <div className="pooBefore">
                                    <Link href="#">Opulencce</Link> | your
                                    personal maid
                                </div>
                                <div className="addCardHeading">
                                    <h1>smart sweeper</h1>
                                </div>
                                <div className="addCartReviews">
                                    <span>
                                        <img src={Star} alt="" loading="lazy" />
                                    </span>
                                    <span>
                                        <img src={Star} alt="" loading="lazy" />
                                    </span>
                                    <span>
                                        <img src={Star} alt="" loading="lazy" />
                                    </span>
                                    <span>
                                        <img src={Star} alt="" loading="lazy" />
                                    </span>
                                    <span>
                                        <img
                                            src={StarFill}
                                            alt=""
                                            loading="lazy"
                                        />
                                    </span>
                                    <div>3 reviews</div>
                                </div>
                            </AddCartMain>
                            <div className="sliderBtn">
                                <SliderProduct />
                            </div>
                        </Col>
                        <Col md={6}>
                            <AddCartSec />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle>

            <ProductStyle1>
                <Container>
                    <Row>
                        {BlueSection.map((item, key) => {
                            return (
                                <Col
                                    md={3}
                                    xs={6}
                                    key={key}
                                    className="my-3 my-sm-4 my-md-0"
                                >
                                    <div className="cardSection">
                                        <div className="cardSectionImg">
                                            <img
                                                src={item.blueSectionImg}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="cardSectionHeading">
                                            <h5>{item.blueSectionHeading}</h5>
                                        </div>
                                        <div className="cardSectionContent">
                                            <span>
                                                {item.blueSectionContent}
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={0}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper6"
                        >
                            {BlueSection.map((item, key) => {
                                return (
                                    <SwiperSlide
                                        key={key}
                                        className="my-3 my-sm-4 my-md-0"
                                    >
                                        <div className="cardSection">
                                            <div className="cardSectionImg">
                                                <img
                                                    src={item.blueSectionImg}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="cardSectionHeading">
                                                <h5>
                                                    {item.blueSectionHeading}
                                                </h5>
                                            </div>
                                            <div className="cardSectionContent">
                                                <span>
                                                    {item.blueSectionContent}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </ProductStyle1>

            <ProductStyle2>
                <Container>
                    <Row className="justify-content-between">
                        <Col md={6} className="align-self-center">
                            <div className="faqSecImg">
                                {/* <video ref={videoRef} autoPlay={videoRef === true ? true : false} controls controlsList="nodownload">
                                    <source src={videoPop1} type="video/mp4" />
                                </video> */}
                            </div>
                        </Col>
                        <Col
                            md={5}
                            xs={9}
                            className="mt-5 mt-md-0 mx-auto mx-md-0"
                        >
                            <FaqSec FaqSecHeading={ProductsSecHeadingSec()} />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle2>

            {/* <ProductStyle3>
                <Container>
                    <Row>
                        <Col md={12}>
                            <ReviewSec />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle3> */}

            {/* <ProductStyle2>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={8}>
                            <ReviewSec />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle2> */}

            <ProductStyle4>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <ReviewSec itemsPerPage={5} />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle4>

            <ProductStyle5>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <SignInForm />
                        </Col>
                    </Row>
                </Container>
            </ProductStyle5>

            <ProductStyle6>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="footerImg">
                                <img
                                    src={Logo}
                                    alt=""
                                    className="mx-auto"
                                    loading="lazy"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ProductStyle6>
        </>
    );
};

const ProductStyle = styled.section`
    padding: 60px 0px 100px;
    @media (max-width: 992px) {
        padding: 60px 0px 150px;
    }
    @media (max-width: 768px) {
        padding: 25px 0px 60px;
    }
    @media (max-width: 400px) {
        padding: 25px 0px 50px;
    }
`;
const ProductStyle1 = styled.section`
    padding: 0px 0 60px;
    @media (max-width: 768px) {
        padding: 60px 0px 60px;
    }
    @media (max-width: 576px) {
        padding: 30px 0px 30px;
    }
    @media (max-width: 400px) {
        padding: 15px 0px 15px;
    }
    background-color: #00b3dc;
    .cardSection {
        .cardSectionImg {
            text-align: center;
            margin: 0 auto;
            margin-top: -25%;
            img {
                margin: 0 auto;
            }
        }
        @media (max-width: 992px) {
            .cardSectionImg {
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        @media (max-width: 768px) {
            .cardSectionImg {
                margin-top: 0%;
                img {
                    width: 25px;
                    height: 25px;
                }
            }
        }
        .cardSectionContent {
            margin-top: 0px;
            font-size: 15px;
            font-family: "M-SB";
            line-height: 19.5px;
            text-align: center;
            color: #ffffff;
        }
        @media (max-width: 992px) {
            .cardSectionContent {
                font-size: 14px;
            }
        }
        @media (max-width: 768px) {
            .cardSectionContent {
                font-size: 13px;
            }
        }
        @media (max-width: 576px) {
            .cardSectionContent {
                font-size: 12px;
            }
        }
        @media (max-width: 400px) {
            .cardSectionContent {
                font-size: 11px;
            }
        }
    }
`;
const ProductStyle2 = styled.section`
    padding: 75px 0px;
    @media (max-width: 768px) {
        padding: 85px 0px 100px;
    }
    @media (max-width: 576px) {
        padding: 70px 0px 75px;
    }
    @media (max-width: 400px) {
        padding: 50px 0px 50px;
    }
    .faqSec {
        .faqSecHeading {
            margin-bottom: 30px;
            h2 {
                font-size: 26px;
                line-height: 26.82px;
                text-align: center;
                font-family: "M-SB";
                color: #1c252e;
                margin-bottom: 0px;
            }
            @media (max-width: 992px) {
                h2 {
                    font-size: 24px;
                }
            }
            @media (max-width: 768px) {
                h2 {
                    font-size: 22px;
                }
            }
            @media (max-width: 576px) {
                h2 {
                    font-size: 20px;
                }
            }
            @media (max-width: 400px) {
                h2 {
                    font-size: 18px;
                }
            }
        }

        .faqSecQestions {
            width: 100%;
            padding: 25px 0px 0px 11px;
            .dropDown {
                cursor: pointer;
                .drop {
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;
                    align-items: center;
                    align-content: center;
                    border-bottom: 1px solid #000000;
                    padding-bottom: 0px;
                }
                .down {
                    padding: 13px 0px 20px;
                    color: #1c252e !important;
                    font-size: 14px;
                    p {
                        margin-bottom: 0px;
                    }
                    @media (max-width: 992px) {
                        font-size: 13px;
                    }
                    @media (max-width: 768px) {
                        font-size: 12px;
                    }
                    @media (max-width: 576px) {
                        font-size: 11px;
                    }
                    @media (max-width: 400px) {
                        font-size: 10px;
                    }
                }
            }
        }
    }
`;

const ProductStyle3 = styled.section`
    padding: 53px 0px 0px;
    background-color: #1c252e;
    .sweeper {
        text-align: center;
    }
    @media (max-width: 992px) {
        padding: 50px 0px 50px;
    }
    @media (max-width: 576px) {
        padding: 30px 0px 30px;
    }
`;

const AddCartMain = styled.div`
    padding: 0px 25px;
    .pooBefore {
        text-transform: capitalize;
        font-size: 10px;
        color: #1c252e;
        margin-bottom: 6px;
        font-family: "M-SB";
        a {
            color: #1c252e;
            font-weight: 500;
        }
    }
    @media (max-width: 576px) {
        padding: 0px 0px;
        margin-bottom: 32px;
        .pooBefore {
            font-size: 8px;
        }
    }
    .addCardHeading {
        margin-bottom: 4px;
        h1 {
            font-family: "M-EB";
            color: #1c252e;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 22px;
            margin-bottom: 0px;
            line-height: 26.82px;
        }
        @media (max-width: 576px) {
            h1 {
                font-size: 22px;
            }
        }
    }
    .addCartReviews {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 4px;
        align-items: center;
        span {
            color: #1c252e;
            font-size: 20px;
        }
        div {
            color: #1c252e;
            margin-left: 15px;
            font-size: 0.8rem;
        }
    }
`;

const ProductStyle4 = styled.section``;
const ProductStyle5 = styled.section`
    background-color: #1c252e;
    padding: 50px 0;
    margin: 50px 0 0;
`;

const ProductStyle6 = styled.section`
    padding: 25px 0;
`;

export default ProductComponents;
