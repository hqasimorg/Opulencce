import React from "react";
import { DownArrow } from "@/Pages/Welcome/assets/Img/AllImages";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useForm } from "@inertiajs/react";

import { AiOutlinePlusCircle } from "react-icons/ai";

export default function FormTemplate1({ product }) {
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
        // {
        //     id: 6,
        //     templeInputSections: "Reviews",
        //     section: "add-reviews",
        // },
        // {
        //     id: 7,
        //     templeInputSections: "Social Media Handles",
        //     section: "add-social-media-handles",
        // },
    ];

    const [activeTab, setActiveTab] = useState(null);

    const [selectedOptions, setSelectedOptions] = useState(false);
    const [displayText, setDisplayText] = useState("Platform");

    const handleShowSelect = () => {
        setSelectedOptions(!selectedOptions);
    };

    const handleTabClick = (section) => {
        setActiveTab(section);
    };

    useEffect(() => {
        setActiveTab(templateInputs[0].section);
    }, []);

    const AddMenu = () => {
        // console.log(product.template1_input.template1_input_menu);
        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputMenuID:
                product.template1_input.template1_input_menu
                    .template1InputMenuID,
            leftSide1: product.template1_input.template1_input_menu.leftSide1,
            leftSide2: product.template1_input.template1_input_menu.leftSide2,
            rightSide1: product.template1_input.template1_input_menu.rightSide1,
            rightSide2: product.template1_input.template1_input_menu.rightSide2,
            ctaButtonRightSide:
                product.template1_input.template1_input_menu.ctaButtonRightSide,
        });

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateMenu"));
        };

        return (
            <form onSubmit={submit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Left Side 1"
                        name="leftSide1"
                        id="leftSide1"
                        value={data.leftSide1}
                        onChange={(e) => setData("leftSide1", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Left Side 2"
                        name="leftSide2"
                        id="leftSide2"
                        value={data.leftSide2}
                        onChange={(e) => setData("leftSide2", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Right Side 1"
                        name="rightSide1"
                        id="rightSide1"
                        value={data.rightSide1}
                        onChange={(e) => setData("rightSide1", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Right Side 2"
                        name="rightSide2"
                        id="rightSide2"
                        value={data.rightSide2}
                        onChange={(e) => setData("rightSide2", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CTA Button Right Side"
                        name="ctaButtonRightSide"
                        id="ctaButtonRightSide"
                        value={data.ctaButtonRightSide}
                        onChange={(e) =>
                            setData("ctaButtonRightSide", e.target.value)
                        }
                    />
                </div>
                <div className="submitBtn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const AddproductInfo = () => {
        // console.log(product.template1_input.template1_input_product_info);
        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputProductInfoID:
                product.template1_input.template1_input_product_info
                    .template1InputProductInfoID,
            price: product.template1_input.template1_input_product_info.price,
            ctaGlobal:
                product.template1_input.template1_input_product_info.ctaGlobal,
            shortDescription:
                product.template1_input.template1_input_product_info
                    .shortDescription,
            main4Benefits:
                product.template1_input.template1_input_product_info
                    .main4Benefits,
            videoLink:
                product.template1_input.template1_input_product_info.videoLink,
        });

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateProductInfo"));
        };

        return (
            <form onSubmit={submit} className="productInfo">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={product.productName}
                        disabled
                    />
                    {/* <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            /> */}
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        min="0"
                        name="price"
                        id="price"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CTA Global"
                        name="ctaGlobal"
                        id="ctaGlobal"
                        value={data.ctaGlobal}
                        onChange={(e) => setData("ctaGlobal", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Short Description"
                        name="shortDescription"
                        id="shortDescription"
                        value={data.shortDescription}
                        onChange={(e) =>
                            setData("shortDescription", e.target.value)
                        }
                    ></textarea>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Main 4 Benefits"
                        name="main4Benefits"
                        id="main4Benefits"
                        value={data.main4Benefits}
                        onChange={(e) =>
                            setData("main4Benefits", e.target.value)
                        }
                    ></textarea>
                </div>
                <div className="form-group">
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Images"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="url"
                        className="form-control"
                        placeholder="Demo Video ( Link )"
                        name="videoLink"
                        id="videoLink"
                        value={data.videoLink}
                        onChange={(e) => setData("videoLink", e.target.value)}
                    />
                </div>
                <div className="submitBtn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const AddSpec = () => {
        // console.log(product.template1_input.template1_input_spec);
        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputSpecID:
                product.template1_input.template1_input_spec
                    .template1InputSpecID,
            specs: product.template1_input.template1_input_spec.specs,
        });

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateSpec"));
        };

        return (
            <form onSubmit={submit} className="specs">
                <div className="form-group">
                    <textarea
                        className="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Specs"
                        name="spec"
                        id="spec"
                        value={data.specs}
                        onChange={(e) => setData("specs", e.target.value)}
                    ></textarea>
                </div>
                <div className="submitBtn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const AddGift = () => {
        // console.log(product.template1_input.template1_input_gift);
        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputGiftID:
                product.template1_input.template1_input_gift
                    .template1InputGiftID,
            gifts: product.template1_input.template1_input_gift.gifts,
        });

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateGift"));
        };

        return (
            <form onSubmit={submit} className="gifts">
                <div className="form-group">
                    <textarea
                        className="form-control"
                        cols="30"
                        rows="5"
                        placeholder="Gifts"
                        name="gift"
                        id="gift"
                        value={data.gifts}
                        onChange={(e) => setData("gifts", e.target.value)}
                    ></textarea>
                </div>
                <div className="submitBtn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const AddproductExtendedInfo = () => {
        // console.log(
        //     product.template1_input.template1_input_product_extended_info
        // );
        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputProductExtendedInfoID:
                product.template1_input.template1_input_product_extended_info
                    .template1InputProductExtendedInfoID,
            question1:
                product.template1_input.template1_input_product_extended_info
                    .question1,
            question2:
                product.template1_input.template1_input_product_extended_info
                    .question2,
            question3:
                product.template1_input.template1_input_product_extended_info
                    .question3,
            question4:
                product.template1_input.template1_input_product_extended_info
                    .question4,
            question5:
                product.template1_input.template1_input_product_extended_info
                    .question5,
            answer1:
                product.template1_input.template1_input_product_extended_info
                    .answer1,
            answer2:
                product.template1_input.template1_input_product_extended_info
                    .answer2,
            answer3:
                product.template1_input.template1_input_product_extended_info
                    .answer3,
            answer4:
                product.template1_input.template1_input_product_extended_info
                    .answer4,
            answer5:
                product.template1_input.template1_input_product_extended_info
                    .answer5,
        });

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateProductExtendedInfo"));
        };

        return (
            <form onSubmit={submit} className="productExtendedInfo">
                <div className="form-group">
                    <label htmlFor="question1" className="mb-2 mt-3">
                        Question 1
                    </label>
                    <input
                        type="text"
                        placeholder="Question 1"
                        name="question1"
                        id="question1"
                        className="form-control mb-2"
                        value={data.question1}
                        onChange={(e) => setData("question1", e.target.value)}
                    />
                    <label htmlFor="question2" className="mb-2 mt-3">
                        Question 2
                    </label>
                    <input
                        type="text"
                        placeholder="Question 2"
                        name="question2"
                        id="question2"
                        className="form-control mb-2"
                        value={data.question2}
                        onChange={(e) => setData("question2", e.target.value)}
                    />
                    <label htmlFor="question3" className="mb-2 mt-3">
                        Question 3
                    </label>
                    <input
                        type="text"
                        placeholder="Question 2"
                        name="question3"
                        id="question3"
                        className="form-control mb-2"
                        value={data.question3}
                        onChange={(e) => setData("question3", e.target.value)}
                    />
                    <label htmlFor="question4" className="mb-2 mt-3">
                        Questions 4
                    </label>
                    <input
                        type="text"
                        placeholder="Question 4"
                        name="question4"
                        id="question4"
                        className="form-control mb-2"
                        value={data.question4}
                        onChange={(e) => setData("question4", e.target.value)}
                    />
                    <label htmlFor="question5" className="mb-2 mt-3">
                        Questions 5
                    </label>
                    <input
                        type="text"
                        placeholder="Question 5"
                        name="question5"
                        id="question5"
                        className="form-control mb-2"
                        value={data.question5}
                        onChange={(e) => setData("question5", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="answer1" className="mb-2 mt-3">
                        Answer 1
                    </label>
                    <input
                        type="text"
                        placeholder="Answer 1"
                        id="answer1"
                        name="answer1"
                        className="form-control mb-2"
                        value={data.answer1}
                        onChange={(e) => setData("answer1", e.target.value)}
                    />
                    <label htmlFor="answer2" className="mb-2 mt-3">
                        Answer 2
                    </label>
                    <input
                        type="text"
                        placeholder="Answer 2"
                        name="answer2"
                        id="answer2"
                        className="form-control mb-2"
                        value={data.answer2}
                        onChange={(e) => setData("answer2", e.target.value)}
                    />
                    <label htmlFor="answer3" className="mb-2 mt-3">
                        Answer 3
                    </label>
                    <input
                        type="text"
                        placeholder="Answer 3"
                        name="answer3"
                        id="answer3"
                        className="form-control mb-2"
                        value={data.answer3}
                        onChange={(e) => setData("answer3", e.target.value)}
                    />
                    <label htmlFor="answer4" className="mb-2 mt-3">
                        Answer 4
                    </label>
                    <input
                        type="text"
                        placeholder="Answer 4"
                        name="answer4"
                        id="answer4"
                        className="form-control mb-2"
                        value={data.answer4}
                        onChange={(e) => setData("answer4", e.target.value)}
                    />
                    <label htmlFor="answer5" className="mb-2 mt-3">
                        Answer 5
                    </label>
                    <input
                        type="text"
                        placeholder="Answer 5"
                        name="answer5"
                        id="answer5"
                        className="form-control mb-2"
                        value={data.answer5}
                        onChange={(e) => setData("answer5", e.target.value)}
                    />
                </div>
                <div className="submitBtn">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const renderForm = () => {
        switch (activeTab) {
            case "add-menu":
                return <AddMenu />;
            case "add-product-info":
                return <AddproductInfo />;
            case "add-spec":
                return <AddSpec />;
            case "add-gifts":
                return <AddGift />;
            case "add-product-extended-info":
                return <AddproductExtendedInfo />;
            // case "add-reviews":
            //     return (
            //         <>
            //             {/* <form className="reviews">
            //                 <div className="form-group">
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         placeholder="Name"
            //                     />
            //                 </div>
            //                 <div className="form-group">
            //                     <input type="number" className="form-control custom-select" placeholder="Stars" />
            //                     <select
            //                         className="form-control custom-select"
            //                         defaultValue={"DEFAULT"}
            //                     >
            //                         <option value="DEFAULT" disabled hidden>
            //                             Stars
            //                         </option>
            //                         <option value="option1">Star 1</option>
            //                         <option value="option2">Star 2</option>
            //                         <option value="option3">Star 3</option>
            //                         <option value="option4">Star 4</option>
            //                         <option value="option5">Star 5</option>
            //                     </select>
            //                 </div>
            //                 <div className="form-group">
            //                     <input
            //                         type="text"
            //                         className="form-control"
            //                         placeholder="Review tagline"
            //                     />
            //                 </div>
            //                 <div className="form-group">
            //                     <input
            //                         type="file"
            //                         className="form-control"
            //                         placeholder="Images"
            //                     />
            //                 </div>
            //                 <div className="form-group">
            //                     <input
            //                         type="date"
            //                         className="form-control"
            //                         placeholder="Timestamps"
            //                     />
            //                 </div>
            //                 <div className="form-check form-switch">
            //                     <label
            //                         className="form-check-label"
            //                         htmlFor="switchButton"
            //                     >
            //                         Status (verified or non verified)
            //                     </label>
            //                     <input
            //                         className="form-check-input"
            //                         type="checkbox"
            //                         id="switchButton"
            //                     />
            //                 </div>
            //                 <div className="form-group descriptionField">
            //                     <textarea
            //                         name=""
            //                         className="form-control"
            //                         id=""
            //                         cols="30"
            //                         rows="5"
            //                         placeholder="Description"
            //                     ></textarea>
            //                 </div>
            //                 <div className="submitBtn">
            //                     <button
            //                         type="submit"
            //                         className="btn btn-primary"
            //                     >
            //                         Submit
            //                     </button>
            //                 </div>
            //             </form> */}
            //         </>
            //     );
            case "add-social-media-handles":
                return (
                    <form className="socialMediaIcon">
                        <div className="form-group">
                            <div className="selectBox">
                                <div
                                    className="selectBoxHeading"
                                    onClick={handleShowSelect}
                                >
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
                                                onClick={() =>
                                                    setDisplayText("Facebook")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="facebook"
                                            >
                                                Facebook
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="instagram"
                                                className="form-check-input"
                                                id="instagram"
                                                onChange={() =>
                                                    setDisplayText("Instagram")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="instagram"
                                            >
                                                Instagram
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="youtube"
                                                className="form-check-input"
                                                id="youtube"
                                                onChange={() =>
                                                    setDisplayText("Youtube")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="youtube"
                                            >
                                                Youtube
                                            </label>
                                        </div>
                                        <div className="selectBoxItem">
                                            <input
                                                type="checkbox"
                                                name="twitter"
                                                className="form-check-input"
                                                id="twitter"
                                                onChange={() =>
                                                    setDisplayText("Twitter")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="twitter"
                                            >
                                                Twitter
                                            </label>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="url"
                                className="form-control"
                                placeholder="URL"
                            />
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
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
                        <div className="templateOneItem">
                            <div className="templateOneHeading">
                                <h1>Template Name</h1>
                            </div>
                            <div className="templateOneLink">
                                <Link
                                    href={`/product/${product.productSlug}/template/${product.productTemplateNumber}/add-reviews`}
                                >
                                    <AiOutlinePlusCircle size={20} />
                                    <span>Add Reviews</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className="mx-auto">
                        <div className="productItems">
                            {templateInputs.map((item) => (
                                <button
                                    key={item.id}
                                    className={`productItem ${
                                        activeTab === item.section
                                            ? " active"
                                            : ""
                                    }`}
                                    onClick={() => handleTabClick(item.section)}
                                >
                                    {item.templeInputSections}
                                </button>
                            ))}
                        </div>
                        <div className="productForm">{renderForm()}</div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
