import React from "react";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import FooterNew from "../UI/FooterNew";
import AboutUsCom from "./AboutUs/AboutUsCom";
import { Head } from '@inertiajs/react';

const AboutUs = () => {
    return (
        <>
            <Head title="About Us" />
            <TopHeader />
            <Header />
            <AboutUsCom />
            <FooterNew />
        </>
    );
};

export default AboutUs;
