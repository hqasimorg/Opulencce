import React from "react";
import AddReviewsSec from "./AddReviews/AddReviewsSec";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const AddReviews = ({ auth, product }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Reviews" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <AddReviewsSec product={product} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddReviews;
