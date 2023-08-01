import React from "react";
import { Head } from "@inertiajs/react";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import ProductComponents from "./Product/ProductComponents";
import { EmailInfo } from "../Components/Component";
// import FooterNew from '../UI/FooterNew'
import Footer from "../UI/Footer";

const Product = () => {
    return (
        <>
            <Head title="Product" />
            <TopHeader />
            <Header />
            <ProductComponents />
            <Footer />
        </>
    );
};

export default Product;
