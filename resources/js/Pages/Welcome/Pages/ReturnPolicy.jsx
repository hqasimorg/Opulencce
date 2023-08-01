import React from "react";
import ReturnPolicySec from "./ReturnPolicy/ReturnPolicySec";
import TopHeader from "../UI/TopHeader";
import Header from "../UI/Header";
import FooterNew from "../UI/FooterNew";
import { Head } from "@inertiajs/react";

const ReturnPolicy = () => {
    return (
        <>
            <Head title="Return Policy" />
            <TopHeader />
            <Header />
            <ReturnPolicySec />
            <FooterNew />
        </>
    );
};

export default ReturnPolicy;
