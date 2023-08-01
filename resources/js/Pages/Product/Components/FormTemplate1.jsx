import NavLink from "@/Components/NavLink";
import { DownArrow } from "@/Pages/Welcome/assets/Img/AllImages";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export default function FormTemplate1() {
    const templateInputs = [
        {
            id: 1,
            templeInputSections: "Menu",
            section: "add-menu",
        },
        {
            id: 2,
            templeInputSections: "Product Info",
            section: "add-product-info",
        },
        {
            id: 3,
            templeInputSections: "Specs",
            section: "add-spec",
        },
        {
            id: 4,
            templeInputSections: "Gifts",
            section: "add-gifts",
        },
        {
            id: 5,
            templeInputSections: "Product Extended info",
            section: "add-product-extended-info",
        },
        {
            id: 6,
            templeInputSections: "Reviews",
            section: "add-reviews",
        },
        {
            id: 7,
            templeInputSections: "Social Media Handles",
            section: "add-social-media-handles",
        },
    ];

    const [activeTab, setActiveTab] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState(false);
    const [displayText, setDisplayText] = useState('Platform');

    const handleShowSelect = () => {
        setSelectedOptions(!selectedOptions)
    }

    const handleTabClick = (section) => {
        setActiveTab(section);
    };

    useEffect(()=>{
        setActiveTab(templateInputs[0].section)
    },[])


    const renderForm = () => {
        switch (activeTab) {
            case "add-menu":
                return (
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Left Side" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Left Side" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Right Side" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Right Side" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="CTA Button Right Side" />
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-product-info":
                return (
                    <form className="productInfo">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" placeholder="Price" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="CTA Global" />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Short Description">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="4 Main Benefits">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" placeholder="Images" />
                        </div>
                        <div className="form-group">
                            <input type="url" className="form-control" placeholder="Demo Video ( Link )" />
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-spec":
                return (
                    <form className="specs">
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Specs">
                            </textarea>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-gifts":
                return (
                    <form className="gifts">
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Gifts">
                            </textarea>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-product-extended-info":
                return (
                    <form className="productExtendedInfo">
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Questions">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Answers">
                            </textarea>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-reviews":
                return (
                    <form className="reviews">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            {/* <input type="number" className="form-control custom-select" placeholder="Stars" /> */}
                            <select className="form-control custom-select" defaultValue={'DEFAULT'} >
                                <option value="DEFAULT" disabled hidden>Stars</option>
                                <option value="option1">Star 1</option>
                                <option value="option2">Star 2</option>
                                <option value="option3">Star 3</option>
                                <option value="option4">Star 4</option>
                                <option value="option5">Star 5</option>
                            </select>

                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Review tagline" />
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" placeholder="Images" />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Timestamps" />
                        </div>
                        <div className="form-check form-switch">
                            <label className="form-check-label" htmlFor="switchButton">Status (verified or non verified)</label>
                            <input className="form-check-input" type="checkbox" id="switchButton" />
                        </div>
                        <div className="form-group descriptionField">
                            <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Description">
                            </textarea>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            case "add-social-media-handles":
                return (
                    <form className="socialMediaIcon">
                        <div className="form-group">
                            <div className="selectBox">
                                <div className="selectBoxHeading" onClick={handleShowSelect}>
                                    <span>{displayText}</span>
                                    <span>
                                        <img src={DownArrow} alt="" />
                                    </span>
                                </div>
                                {selectedOptions === true && (
                                    <div className="selectBoxItems">
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="facebook"
                                                className="form-check-input"
                                                id="facebook"
                                                onClick={() => setDisplayText('Facebook')}
                                            />
                                            <label className="form-check-label" htmlFor="facebook">
                                                Facebook
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="instagram"
                                                className="form-check-input"
                                                id="instagram"
                                                onChange={() => setDisplayText('Instagram')}
                                            />
                                            <label className="form-check-label" htmlFor="instagram">
                                                Instagram
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="youtube"
                                                className="form-check-input"
                                                id="youtube"
                                                onChange={() => setDisplayText('Youtube')}
                                            />
                                            <label className="form-check-label" htmlFor="youtube">
                                                Youtube
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="twitter"
                                                className="form-check-input"
                                                id="twitter"
                                                onChange={() => setDisplayText('Twitter')}
                                            />
                                            <label className="form-check-label" htmlFor="twitter">
                                                Twitter
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="url" className="form-control" placeholder="URL" />
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                );
            default:
                return null;
        }
    };

    return (
        <section className="dashboardSec">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="templateOneHeading">
                            <h1>Template 1 Requirements</h1>
                        </div>
                    </Col>
                    <Col md={10} className="mx-auto">
                        <div className="productItems">
                            {templateInputs.map((item) => (
                                <button
                                    key={item.id}
                                    className={`productItem ${activeTab === item.section ? ' active' : ''}`}
                                    onClick={() => handleTabClick(item.section)}
                                >
                                    {item.templeInputSections}
                                </button>
                            ))}
                        </div>
                        <div className="productForm">
                            {renderForm()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
}
