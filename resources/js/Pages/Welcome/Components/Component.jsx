import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    CloseWhite,
    DownArrow,
    PlayBtn,
    Star,
    StarFill,
    Tick,
    videoPop,
} from "../assets/Img/AllImages";
import { ReviewSecData, Sweeper, bannerItem } from "../assets/Data/Data";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import { Link } from "@inertiajs/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import _ from 'lodash';
import ReactPaginate from "react-paginate";

const BannerContent = () => {
    return (
        <BannerContentStyle>
            <div className="BannerContentHeading">
                <h1>
                    smart <br /> sweeper
                </h1>
            </div>
            <div className="BannerContentIcons">
                {bannerItem.map((item, key) => {
                    return (
                        <div className="BannerContentIconsItems" key={key}>
                            <span>
                                <img src={item.bannerIcon} alt="hehheheheh" loading="lazy"/>
                            </span>
                            <p>
                                <b>{item.bannerHeading}</b>
                                <span>{item.bannerContent}</span>
                            </p>
                        </div>
                    );
                })}
                <div className="BannerContentIconsBtn">
                    <button type="button">More ABOUT ME</button>
                </div>
            </div>
        </BannerContentStyle>
    );
};

const BannerContentStyle = styled.div`
    .BannerContentHeading {
        h1 {
            text-transform: uppercase;
            font-size: 62px;
            line-height: 75.58px;
            color: #1c252e;
            font-family: "M-EB";
            position: relative;
            padding-left: 25px;
            &::before {
                content: "";
                position: absolute;
                top: 0px;
                left: 0px;
                width: 6px;
                height: 100%;
                background-color: #1c252e;
            }
        }
        @media (max-width: 992px) {
            h1 {
                font-size: 44px;
                line-height: 53.64px;
            }
        }
        @media (max-width: 576px) {
            h1 {
                font-size: 32px;
                line-height: 40px;
            }
        }
    }
    .BannerContentIcons {
        .BannerContentIconsItems {
            display: flex;
            flex-flow: row wrap;
            align-content: center;
            align-items: center;
            margin: 26px 0;
            span {
                margin-right: 42px;
                width: 60px;
                height: 60px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            p {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                margin-bottom: 0px;
                color: #1c252e;
                b {
                    width: 100%;
                    font-size: 14px;
                    text-transform: uppercase;
                }
                span {
                    width: 100%;
                    margin: 0px;
                    height: 100%;
                    font-size: 12px;
                }
                @media (max-width: 576px) {
                    b {
                        font-size: 12px;
                    }
                    span {
                        font-size: 10px;
                    }
                }
            }
            @media (max-width: 576px) {
                text-align: center;
                p {
                    width: 100%;
                }
            }
        }
        .BannerContentIconsBtn {
            button {
                padding: 10px 30px;
                font-size: 15px;
                line-height: 20px;
                color: #fcfcf0;
                font-family: "M-B";
                border-radius: 100px;
                background-color: #00bfe3;
                border: 0px;
            }
            @media (max-width: 576px) {
                button {
                    font-size: 13px;
                    padding: 7px 20px;
                }
            }
        }
    }
    @media (max-width: 992px) {
        .BannerContentIcons {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            // align-content: space-between;
            .BannerContentIconsItems {
                width: 50%;
                margin: 15px 0px;
            }
            .BannerContentIconsBtn {
                margin: 15px auto 0;
            }
        }
    }
    @media (max-width: 576px) {
        .BannerContentIcons {
            .BannerContentIconsBtn {
                margin: 25px auto 0;
            }
        }
    }
`;

const SliderBtn = () => {
    const [showVideo, setShowVideo] = useState(false);

    const playerShowhandler = () => {
        setShowVideo(!showVideo);
    };

    return (
        <>
            <SliderBtnStyle onClick={playerShowhandler}>
                <div className="sliderBtnIcon">
                    <img src={PlayBtn} alt="" loading="lazy"/>
                </div>
                <div className="sliderBtnContent">
                    <h5>
                        WATCH <br /> THE DEMO
                    </h5>
                </div>
            </SliderBtnStyle>
            {showVideo === true ? (
                <VideoPopup>
                    <div className="videoCloseIcon">
                        <img
                            src={CloseWhite}
                            alt=""
                            onClick={playerShowhandler}
                            loading="lazy"
                        />
                    </div>
                    <div className="videoPlayer">
                        <video controls controlsList="nodownload">
                            <source src={videoPop} type="video/mp4" />
                        </video>
                    </div>
                </VideoPopup>
            ) : (
                ""
            )}
        </>
    );
};

const SliderBtnStyle = styled.div`
    display: flex;
    justify-content: end;
    flex-flow: row wrap;
    text-decoration: none;
    margin-top: 75px;
    cursor: pointer;
    .sliderBtnIcon {
        margin-right: 17px;
        align-self: center;
        img {
            width: 60px;
            height: 60px;
        }
    }
    .sliderBtnContent {
        h5 {
            font-size: 26px;
            line-height: 32px;
            color: #1c252e;
            font-family: "M-SB";
            text-transform: uppercase;
            margin-bottom: 0px;
        }
    }
    @media (max-width: 992px) {
        margin-top: 0px;
        .sliderBtnIcon {
            margin-right: 9px;
            img {
                width: 46.67px;
                height: 46.67px;
            }
        }
        .sliderBtnContent {
            h5 {
                font-size: 18px;
                line-height: 21px;
            }
        }
    }
    @media (max-width: 576px) {
        .sliderBtnIcon {
            img {
                width: 37px;
                height: 37px;
            }
        }
        .sliderBtnContent {
            h5 {
                font-size: 14px;
                line-height: 17px;
            }
        }
    }
`;

const VideoPopup = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgb(0 0 0 / 80%);
    display: grid;
    place-content: center;
    .videoCloseIcon {
        position: absolute;
        top: 35px;
        right: 35px;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            cursor: pointer;
            width: 100%;
            height: 100%;
        }
    }
    .videoPlayer {
        background-color: rgb(250 250 250 / 0%);
        border-radius: 25px;
        width: 80%;
        height: unset;
        margin: 0 auto;
        video {
            border-radius: 25px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }
    }
`;

const AddCartSec = () => {
    const [tab, setTab] = useState(false);

    const tabHandler = () => {
        setTab(!tab);
    };

    const [tabone, setTabone] = useState(true);
    const [tabTwo, setTabTwo] = useState(false);
    const [tabThree, setTabThree] = useState(false);

    const [addons, setAddons] = useState(false);
    const [addonsItems, setAddonsItems] = useState(false);

    const [num, setNum] = useState(169.99);
    const [rememberUser, setRememberUser] = useState(false);
    const [rememberUser1, setRememberUser1] = useState(false);
    const [rememberUser2, setRememberUser2] = useState(false);
    const [rememberUser3, setRememberUser3] = useState(false);
    const [rememberUser4, setRememberUser4] = useState(false);
    const [rememberUser5, setRememberUser5] = useState(false);
    const [rememberUser6, setRememberUser6] = useState(false);
    const [rememberUser7, setRememberUser7] = useState(false);
    const [rememberUser8, setRememberUser8] = useState(false);

    const tabOneHandler = () => {
        setTabone(true);
        setTabTwo(false);
        setTabThree(false);
    };
    const tabTwoHandler = () => {
        setTabone(false);
        setTabTwo(true);
        setTabThree(false);
    };
    const tabThreeHandler = () => {
        setTabone(false);
        setTabTwo(false);
        setTabThree(true);
    };

    const checkItem1 = () => {
        if (!rememberUser) {
            setNum(num + 39.99);
        } else {
            setNum(num - 39.99);
        }
        setRememberUser(!rememberUser);
    };
    const checkItem2 = () => {
        if (!rememberUser1) {
            setNum(num + 49.99);
        } else {
            setNum(num - 49.99);
        }
        setRememberUser1(!rememberUser1);
    };

    const checkItem3 = () => {
        if (!rememberUser2) {
            setNum(num + 14.99);
        } else {
            setNum(num - 14.99);
        }
        setRememberUser2(!rememberUser2);
    };
    const checkItem4 = () => {
        if (!rememberUser3) {
            setNum(num + 14.99);
        } else {
            setNum(num - 14.99);
        }
        setRememberUser3(!rememberUser3);
    };
    const checkItem5 = () => {
        if (!rememberUser4) {
            setNum(num + 14.99);
        } else {
            setNum(num - 14.99);
        }
        setRememberUser4(!rememberUser4);
    };
    const checkItem6 = () => {
        if (!rememberUser5) {
            setNum(num + 14.99);
        } else {
            setNum(num - 14.99);
        }
        setRememberUser5(!rememberUser5);
    };
    const checkItem7 = () => {
        if (!rememberUser6) {
            setNum(num + 24.99);
        } else {
            setNum(num - 24.99);
        }
        setRememberUser6(!rememberUser6);
    };
    const checkItem8 = () => {
        if (!rememberUser7) {
            setNum(num + 19.99);
        } else {
            setNum(num - 19.99);
        }
        setRememberUser7(!rememberUser7);
    };

    const addonsDropdown = () => {
        setAddons(!addons);
    };
    const addonsItemsBtn = () => {
        setAddonsItems(true);
    };

    return (
        <>
            <AddCartMain>
                <div className="pooBefore">
                    <Link href="#">Opulencce</Link> | your personal maid
                </div>
                <div className="addCardHeading">
                    <h1>smart sweeper</h1>
                </div>
                <div className="addCartReviews">
                    <span>
                        <img src={Star} alt="" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Star} alt="" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Star} alt="" loading="lazy"/>
                    </span>
                    <span>
                        <img src={Star} alt="" loading="lazy"/>
                    </span>
                    <span>
                        <img src={StarFill} alt="" loading="lazy"/>
                    </span>
                    <div>3 reviews</div>
                </div>
                <div className="addCartContn">
                    <p>
                        Keep your house clean and fresh with our very
                        intelligent strong suction robotic sweeper. Slides
                        through carpet, wooden floors and tiles with ease
                        leaving a great finish.
                    </p>
                </div>
                <div className="addCartButton">
                    <h5>
                        <sup>£ </sup>169<sup>99</sup>
                    </h5>
                </div>
                <div className="addCartQuantity">
                    <span>buy it with</span>
                </div>
                <div className="addDropDown">
                    <div className="addDrop" onClick={addonsDropdown}>
                        <span>AD-ONS</span>
                        <span>
                            <img src={DownArrow} alt="" loading="lazy"/>
                        </span>
                    </div>
                    {addons === true ? (
                        <div className="addDown">
                            <div className="addButton">
                                <button
                                    className={
                                        addonsItems === true ? "" : "AddActive"
                                    }
                                    onClick={() => setAddonsItems(false)}
                                >
                                    Bundles
                                </button>
                                <button
                                    className={
                                        addonsItems === true ? "AddActive" : ""
                                    }
                                    onClick={addonsItemsBtn}
                                >
                                    Individual
                                </button>
                            </div>
                            <div className="addButtonData">
                                {addonsItems === true ? (
                                    ""
                                ) : (
                                    <form action="">
                                        <div
                                            className="addCheck"
                                            style={{
                                                display: "flex",
                                                alignItems: "baseline",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                name="item1"
                                                id="item1"
                                                onChange={checkItem1}
                                                checked={rememberUser}
                                            />
                                            <label htmlFor="item1">
                                                Full Kit Bundle
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                £39.99 (save £69.99)
                                            </label>
                                            <ul>
                                                <li>Brushes x 2</li>
                                                <li>Dry Mop</li>
                                                <li>Wet Mop</li>
                                                <li>Water Tank</li>
                                                <li>Charging lead</li>
                                                <li>Remote Control</li>
                                            </ul>
                                        </div>
                                        <div
                                            className="addCheck"
                                            style={{
                                                display: "flex",
                                                alignItems: "baseline",
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                name="item2"
                                                id="item2"
                                                onChange={checkItem2}
                                                checked={rememberUser1}
                                            />
                                            <label htmlFor="item2">
                                                3 Months Supply Bundle
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                £49.99 (save £25.01)
                                            </label>
                                            <ul>
                                                <li>3 Sets of Brushes</li>
                                                <li>3 Sets of Dry Mops</li>
                                                <li>3 Sets of Wet Mops</li>
                                            </ul>
                                        </div>
                                    </form>
                                )}
                                {addonsItems === true ? (
                                    <form action="">
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item3"
                                                id="item3"
                                                onChange={checkItem3}
                                                checked={rememberUser2}
                                            />
                                            <label htmlFor="item3">
                                                Brushes £14.99
                                            </label>
                                        </div>
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item4"
                                                id="item4"
                                                onChange={checkItem4}
                                                checked={rememberUser3}
                                            />
                                            <label htmlFor="item4">
                                                Dry Mop £14.99
                                            </label>
                                        </div>
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item5"
                                                id="item5"
                                                onChange={checkItem5}
                                                checked={rememberUser4}
                                            />
                                            <label htmlFor="item5">
                                                Wet Mop £14.99
                                            </label>
                                        </div>
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item6"
                                                id="item6"
                                                onChange={checkItem6}
                                                checked={rememberUser5}
                                            />
                                            <label htmlFor="item6">
                                                Charging Lead £14.99
                                            </label>
                                        </div>
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item7"
                                                id="item7"
                                                onChange={checkItem7}
                                                checked={rememberUser6}
                                            />
                                            <label htmlFor="item7">
                                                Water Tank £24.99
                                            </label>
                                        </div>
                                        <div className="addCheck">
                                            <input
                                                type="checkbox"
                                                name="item8"
                                                id="item8"
                                                onChange={checkItem8}
                                                checked={rememberUser7}
                                            />
                                            <label htmlFor="item8">
                                                Remote Control £19.99
                                            </label>
                                        </div>
                                    </form>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <button className="addToCart">
                    PAY NOW |&nbsp;
                    {/* <span className="price">£ {num}</span> */}
                    <span className="price">
                        £ {parseFloat(num).toFixed(2)}
                    </span>
                </button>
                <TabContainer>
                    <div className="product-tabs">
                        <div
                            onClick={tabOneHandler}
                            className={tabone === true ? "active" : ""}
                        >
                            benefits
                        </div>
                        <div
                            onClick={tabTwoHandler}
                            className={tabTwo === true ? "active" : ""}
                        >
                            gift
                        </div>
                        <div
                            onClick={tabThreeHandler}
                            className={tabThree === true ? "active" : ""}
                        >
                            specs
                        </div>
                    </div>
                    <div className="productTabsContent">
                        {tabone === true && (
                            <ul>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> 1800pa suction
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Battery Capacity
                                    2000mah
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Weight 2.4kg
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Remote control
                                    distance 40m
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Package dimensions
                                    43.7cm x 34.5cm x 6.7cm
                                </li>
                            </ul>
                        )}
                        {tabTwo === true && (
                            <ul>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> tbc
                                </li>
                            </ul>
                        )}
                        {tabThree === true && (
                            <ul>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Vacuums and Mops
                                    2800pa suction.
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> 90min continuous
                                    wet mopping.
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Smart Navigation.
                                    Intelligent obstacle avoidance.
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Path Planning.{" "}
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Cleans at every
                                    Angle.Strong Suction.
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Slim 5cm Body
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Super lasting
                                    Battery
                                </li>
                                <li>
                                    <img src={Tick} alt="" loading="lazy"/> Advanced sensors.
                                </li>
                            </ul>
                        )}
                    </div>
                </TabContainer>
            </AddCartMain>
        </>
    );
};

const AddCartMain = styled.div`
                    padding:0px 25px;
                    .pooBefore{
                        text - transform: capitalize;
                    font-size: 10px;
                    color: #1C252E;
                    margin-bottom: 6px;
                    font-family: 'M-SB';
                    a{
                        color: #1C252E;
                    font-weight: 500;
        }
                    @media (max-width:576px){
                        display: none
        }
    }
                    @media (max-width:576px){
                        padding:0px 0px;
                    .pooBefore{
                        font-size: 8px;
        }
    }
                    .addCardHeading{
                        margin-bottom: 4px;
                    h1{
                        font-family: 'M-EB';
                    color: #1C252E;
                    font-weight: 700;
                    text-transform: uppercase;
                    font-size: 22px;
                    margin-bottom: 0px;
                    line-height: 26.82px;
        }
                    @media (max-width:576px){
                        h1{
                        font-size:22px;
            }
        }
                    @media (max-width:576px){
                        display: none
        }
    }
                    .addCartReviews{
                        display:flex;
                    flex-flow:row wrap;
                    margin-bottom: 4px;
                    align-items: center;
                    span{
                        color: #1C252E;
                    font-size:20px;
        }
                    div{
                        color: #1C252E;
                    margin-left: 15px;
                    font-size:0.8rem;
        }
                    @media (max-width:576px){
                        display: none
        }
    }
                    .addCartContn{
                        margin-bottom: 10px;
                    p{
                        font-size: 0.82rem;
                    line-height: 17.07px;
                    color: #1C252E;
                    margin-bottom: 0px;
        }
                    @media (max-width:576px){
                        p{
                        font-size: 12px;
            }
        }
    }
                    .addCartButton{
                        margin-bottom: 20px;
                    h5{
                        font-size: 22px;
                    font-family: 'M-SB';
                    margin: 0px;
                    color: #1C252E;
                    sup{
                        font-size: 12px;
            }
        }
    }
    .addCartQuantity{
        margin-bottom: 18px;
        span{
            font-size: 14px;
            line-height: 17.07px;
            font-family: 'M-SB';
            color: #1C252E;
            text-transform: uppercase;
        }
            @media (max-width:768px){
                span{
                font-size: 13px;
            }
        }
    }
    .addSection{
        background-color: #D9D9D9;
        padding: 51px 0px;
        text-align: center;
        margin-bottom: 23px;
        h5{
            font-size: 22px;
            line-height: 26.82px;
            font-family: 'M-SB';
            text-transform: uppercase;
            margin-bottom: 0px;
        }
        @media (max-width:992px){
            padding: 40px 0px;
            h5{
                font-size: 20px;
            }
        }
        @media (max-width:768px){
            padding: 30px 0px;
            h5{
                font-size: 18px;
            }
        }
        @media (max-width:576px){
            padding: 25px 0px;
            h5{
                font-size: 16px;
            }
        }
    }
        .addToCart{
            background-color: #00bfe3;
            border: 1px solid #00bfe3;
            color: #FFFFFF;
            display: block;
            width: 100%;
            margin: 0px;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 21.94px;
            padding: 16px;
            font-family: 'M-SB';
        span{
            font-family: 'M-R';
        }
    }
    @media (max-width:576px){
        .addToCart{
            font-size:10px;
        }
    }
`;

const TabContainer = styled.div`
    .product-tabs {
        border-bottom: 1px solid #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        div {
            padding: 8px;
            font-size: 0.75rem;
            font-weight: 500;
            text-transform: uppercase;
            color: #000;
            width: 100%;
            text-align: center;
            border-bottom: 2px solid transparent;
            cursor: pointer;
            &:hover {
                border-bottom: 2px solid #000;
            }
        }
        div.active {
            border-bottom: 2px solid #000;
        }
        @media (max-width: 576px) {
            div {
                font-size: 11px;
            }
        }
    }
    .productTabsContent {
        ul {
            list-style: none;
            padding-left: 0px;
            margin-bottom: 0px;
            li {
                margin-bottom: 11px;
                padding-left: 15px;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                img {
                    margin-right: 10px;
                    width: 15px;
                    height: 15px;
                }
                @media (max-width: 992px) {
                    img {
                        width: 13px;
                        height: 13px;
                    }
                }
                @media (max-width: 768px) {
                    img {
                        width: 11px;
                        height: 11px;
                    }
                }
                @media (max-width: 576px) {
                    img {
                        width: 10px;
                        height: 10px;
                    }
                }
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
`;

const Faqs = ({ dropDownMain, dropDownContent, isOpen, onClick }) => {
    const dropDownHandler = () => {
        onClick();
    };

    // const closeOtherDropdowns = () => {
    //     setDropDown(true);
    // };

    return (
        <>
            <div className="faqSecQestions">
                <div className="dropDown">
                    <div className="drop" onClick={dropDownHandler}>
                        <span>{dropDownMain}</span>
                        <span>{isOpen ? "-" : "+"}</span>
                    </div>
                    {isOpen && (
                        <>
                            <div className="down">
                                <p>{dropDownContent}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const SweeperImgCard = () => {
    return (
        <>
            <div className="sweeperImgCard">
                {Sweeper.map((item, key) => {
                    return (
                        <div className="sweeperImgitem" key={key}>
                            <img src={item.sweeperitem} alt="" loading="lazy"/>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const FaqsNew = ({
    dropDownMain,
    dropDownContent,
    isOpen,
    onClick,
    dropDownMainSmall,
}) => {
    const dropDownHandler = () => {
        onClick();
    };

    // const closeOtherDropdowns = () => {
    //     setDropDown(true);
    // };

    return (
        <>
            <div className="faqSecQestions">
                <div className="dropDown">
                    <div className="drop dropnew" onClick={dropDownHandler}>
                        <span>
                            <small>
                                <span>
                                    <img src={Star} alt="" loading="lazy"/>
                                </span>
                                <span>
                                    <img src={Star} alt="" loading="lazy"/>
                                </span>
                                <span>
                                    <img src={Star} alt="" loading="lazy"/>
                                </span>
                                <span>
                                    <img src={Star} alt="" loading="lazy"/>
                                </span>
                                <span>
                                    <img src={StarFill} alt="" loading="lazy"/>
                                </span>
                            </small>{" "}
                            <br /> {dropDownMain} <br />{" "}
                            <small>{dropDownMainSmall}</small>
                        </span>
                        <span>{isOpen ? "-" : "+"}</span>
                    </div>
                    {isOpen && (
                        <>
                            <div className="down">
                                <p>{dropDownContent}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const EmailInfo = () => {
    return (
        <div className="emailInfo">
            <h4>need more info? we are always here for you</h4>
            <h5>EMAIL us at info@opulencce.co.uk</h5>
        </div>
    );
};

const ReviewSec = ({ itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(ReviewSecData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(ReviewSecData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % ReviewSecData.length;
        setItemOffset(newOffset);
    };

    return (
        <ReviewSecStyled>
            <div className="reviewSecHeadingContent">
                <div className="reviewSecHeading">
                    <h2>4.9</h2>
                    <div className="reviewSecStar">
                        <span><img src={Star} alt="" loading="lazy"/></span>
                        <span><img src={Star} alt="" loading="lazy"/></span>
                        <span><img src={Star} alt="" loading="lazy"/></span>
                        <span><img src={Star} alt="" loading="lazy"/></span>
                        <span><img src={Star} alt="" loading="lazy"/></span>
                    </div>
                    <div className="reviewSecReviews"><span>529 Reviews</span></div>
                </div>
                <div className="reviewSecHeadingTwo">
                    <h4>Reviews</h4>
                </div>
            </div>
            {currentItems.map((item) => (
                <div className="reviewSecItem" key={item.id}>
                    <div className="reviewSecItemContent">
                        <div className="reviewSecItemContentName">
                            <span><b>{item.contentName}</b>{item.contentChecker}</span>
                            <span>{item.contentDate}</span>
                        </div>
                        <div className="reviewSecItemContentStar">
                            <span><img src={Star} alt="" loading="lazy"/></span>
                            <span><img src={Star} alt="" loading="lazy"/></span>
                            <span><img src={Star} alt="" loading="lazy"/></span>
                            <span><img src={Star} alt="" loading="lazy"/></span>
                            <span><img src={Star} alt="" loading="lazy"/></span>
                        </div>
                        <div className="reviewSecItemContentHeading">
                            <h5>{item.contentHeading}</h5>
                        </div>
                        <div className="reviewSecItemContentPara">
                            <p>{item.contentPara}</p>
                        </div>
                        <div className="reviewSecItemContentSmall">
                            <span>{item.contentSmall}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="pagination">
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName="page-item"
                    pageLinkClassName=""
                    previousClassName="page-item"
                    previousLinkClassName=""
                    nextClassName="page-item"
                    nextLinkClassName=""
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName=""
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </ReviewSecStyled>
    );
};

const ReviewSecStyled = styled.div`
    padding: 50px 40px;
    background-color: #f7f7f7;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 25px 3px;
    @media (max-width: 768px){
        .reviewSecItemContentName{
            span{
                font-size: 12px;
                b{
                    font-size: 13px;
                }
            }
        }
        .reviewSecItemContentStar{
            span{
                width: 15px;
                height: 15px;
            }
        }
        .reviewSecItemContentHeading{
            h5{
                font-size: 20px;
            }
        }
        padding: 25px 15px;
        .reviewSecItemContentPara{
            p{
                font-size: 12px;
            }
        }
        .reviewSecItemContentSmall{
            span{
                font-size: 12px;
            }
        }
    }
    @media (max-width: 576px){
        .reviewSecItemContentName{
            span{
                font-size: 11px;
                b{
                    font-size: 12px;
                }
            }
        }
        .reviewSecItemContentHeading{
            h5{
                font-size: 18px;
            }
        }
        .reviewSecItemContentPara{
            p{
                font-size: 11px;
            }
        }
        .reviewSecItemContentSmall{
            span{
                font-size: 11px;
            }
        }
    }
    @media (max-width: 400px){
        .reviewSecItemContentName{
            span{
                font-size: 10px;
                b{
                    font-size: 11px;
                }
            }
        }
        .reviewSecItemContentHeading{
            h5{
                font-size: 16px;
            }
        }
        .reviewSecItemContentPara{
            p{
                font-size: 10px;
            }
        }
        .reviewSecItemContentSmall{
            span{
                font-size: 10px;
            }
        }
    }
`;

const SignInForm = () => {
    return (
        <div className="formStyle">
            <form action="">
                <div className="form-group">
                    <label htmlFor="signin">Sign In</label>
                    <input type="email" name="signin" id="signin" placeholder="YOUR EMAIL" />
                    <button type="submit"><svg className="icon icon--arrow-right" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 4H11.5M11.5 4L7.5 1M11.5 4L7.5 7" stroke="#FFFFFF"></path>
                    </svg></button>
                </div>
            </form>
        </div>
    )
}

const SectionHandle = ({ SectionHandlerHeading }) => {
    return (
        <>
            <div className="sectionHandlerHeading">
                {SectionHandlerHeading}
            </div>
        </>
    )
}

const Banner = ({bannerHeading}) => {
    return (
        <div className="aboutBannerDiv">
            <h1>{bannerHeading}</h1>
        </div>
    )
}

export {
    BannerContent,
    SliderBtn,
    AddCartSec,
    Faqs,
    SweeperImgCard,
    FaqsNew,
    EmailInfo,
    ReviewSec,
    SignInForm,
    SectionHandle,
    Banner,
};
