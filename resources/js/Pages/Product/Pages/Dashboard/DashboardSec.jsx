import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "@inertiajs/react";

import * as Hi from "react-icons/hi";

const DashboardSec = ({ products }) => {
    // const products = [
    //     {
    //         id: 1,
    //         productName: "Smart Sweeper 1",
    //     },
    //     {
    //         id: 2,
    //         productName: "Smart Sweeper 2",
    //     },
    //     {
    //         id: 3,
    //         productName: "Smart Sweeper 3",
    //     },
    //     {
    //         id: 4,
    //         productName: "Smart Sweeper 4",
    //     },
    // ];

    return (
        <section className="productCardSec">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="productCardMain">
                            <div className="productCardMainContent">
                                <div className="productCardMainHeading privacyPolicySecContentHeading">
                                    <h1>Products</h1>
                                </div>
                                <div className="productCardMainLink">
                                    <Link href={route("product.add")}>
                                        <AiOutlinePlusCircle size={20} />
                                        <span className="p-1">Add Product</span>
                                    </Link>
                                </div>
                            </div>
                            {/* {products.map((item, key) => {
                                return (
                                    <div key={key} className="productCard">
                                        <div className="productCardHeading">
                                            <h2>{item.productName}</h2>
                                        </div>
                                        <div className="productCardContent">
                                            <h3>TagLine</h3>
                                        </div>
                                    </div>
                                );
                            })} */}
                            {products.length > 0 ? (
                                products.map((item, key) => {
                                    return (
                                        <div key={key} className="productCard">
                                            <div className="productCardHeading labelCardItemHeading">
                                                <h2>{item.productName}</h2>
                                                <div className="labelCardItemMenu">
                                                    <Hi.HiDotsVertical />
                                                    <div className="labelCardItemMenuMenu">
                                                        <ul>
                                                            <li>
                                                                <Link href="#">
                                                                    Active
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    href={`/product/${item.productSlug}/template/${item.productTemplateNumber}`}
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="productCardContent">
                                                <h3>TagLine</h3>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <h3>
                                    No Any Product Found Please Add New Product
                                </h3>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DashboardSec;
