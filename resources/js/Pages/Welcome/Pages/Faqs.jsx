import React from "react";
import FaqsSec from "./Faqs/FaqsSec";
import FooterNew from "../UI/FooterNew";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import { Head } from '@inertiajs/react';


const Faqs = () => {
    return (
        <>
            <Head title="Faqs" />
            <TopHeader />
            <Header />
            <FaqsSec />
            <FooterNew />
        </>
    );
};

export default Faqs;
