import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FormTemplate1 from "./FormTemplate1";

export default function MenuFormTemplate1({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add Product Form" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <FormTemplate1 />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
