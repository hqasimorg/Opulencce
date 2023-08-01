import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from "react";
import { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const AddProductSec = () => {

    const [selected, setSelected] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        productName: "",
        productTemplateNumber: "",
    });

    useEffect(() => {
        return () => {
            reset("productName", "productTemplateNumber");
        };
    }, []);

    const templates = [
        {
            id: 1,
            templateName: "Template Name 1",
            templateId: "TemplateName1",
        },
        {
            id: 2,
            templateName: "Template Name 2",
            templateId: "TemplateName2",
        },
        {
            id: 3,
            templateName: "Template Name 3",
            templateId: "TemplateName3",
        },
        {
            id: 4,
            templateName: "Template Name 4",
            templateId: "TemplateName4",
        },
    ];

    function onTemplateInputChange(productTemplateNumber) {
        setSelected((prev) =>
            productTemplateNumber === prev ? null : productTemplateNumber
        );
        setData("productTemplateNumber", productTemplateNumber + 1);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route("createproduct"));
    };

    return (
        <section className='productCardSec'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="productCardMain">
                            <div className="productCardMainContent addProductContent">
                                <div className="productCardMainHeading">
                                    <h1>Product Name</h1>
                                </div>
                                <div className="ContactUsFormHeading">
                                    <div className="form-group">
                                        {/* <label htmlFor='productName' className='form-label'>Enter the Product Name: </label> */}
                                        <input
                                            type="text"
                                            name="productName"
                                            id="productName"
                                            className='form-control'
                                            placeholder="Enter the Product Name"
                                            value={data.productName}
                                            onChange={(e) =>
                                                setData(
                                                    "productName",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.productName}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="productCardMainHeading">
                                <h1>Choose Template</h1>
                            </div>
                            <form className="ContactUsForm" onSubmit={submit}>
                                {templates.map((item, key) => {
                                    return (
                                        <div key={key} className="form-check labelCardItems">
                                            <label
                                                className="form-check-label labelCardItem"
                                                htmlFor={item.templateId}
                                            >
                                                <div className="labelCardItemHeading">
                                                    <h2>{item.templateName}</h2>
                                                </div>
                                                <div className="labelCardItemContent">
                                                    <h3>Up to 100Mbit/s</h3>
                                                </div>
                                                <div className="labelCardItemPrice">
                                                    <span className="labelCardItemPriceItem">
                                                        299,-
                                                    </span>
                                                    <span className="labelCardItemPriceItem">
                                                        /month
                                                    </span>
                                                </div>
                                            </label>
                                            <input
                                                type="checkbox"
                                                checked={key === selected}
                                                className='form-check-input'
                                                name={item.templateId}
                                                id={item.templateId}
                                                onChange={() =>
                                                    onTemplateInputChange(
                                                        key
                                                    )
                                                }
                                            />
                                        </div>
                                    );
                                })}
                                <InputError
                                    message={errors.productTemplateNumber}
                                    className="mt-4"
                                />
                                <PrimaryButton
                                    className="mt-4"
                                    disabled={processing}
                                >
                                    Create Product
                                </PrimaryButton>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AddProductSec