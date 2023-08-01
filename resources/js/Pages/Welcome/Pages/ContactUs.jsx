import React from "react";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import FooterNew from "../UI/FooterNew";
import ContactUsCom from "./ContactUs/ContactUsCom";
import { Head } from "@inertiajs/react";

const ContactUs = () => {
    return (
        <>
            <Head title="Contact Us" />
            <TopHeader />
            <Header />
            <ContactUsCom />
            <FooterNew />
        </>
    );
};

export default ContactUs;
