import React from "react";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import PrivacyPolicySec from "./PrivacyPolicy/PrivacyPolicySec";
import FooterNew from "../UI/FooterNew";
import { Head } from "@inertiajs/react";

const PrivacyPolicy = () => {
    return (
        <>
            <Head title="Privacy Policy" />
            <TopHeader />
            <Header />
            <PrivacyPolicySec />
            <FooterNew />
        </>
    );
};

export default PrivacyPolicy;
