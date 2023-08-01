import React from "react";
import AddProductFormSec from "./AddProductForm/AddProductFormSec";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const AddProductForm = ({ auth, product }) => {

    // console.log(product)
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Add Product Form" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            {product.productTemplateNumber == 1 && (
                                <>
                                    <AddProductFormSec product={product} />
                                </>
                            )}
                            {product.productTemplateNumber == 2 && (
                                <h4 className="p-6 text-gray-900">
                                    Add Product Form for template 2
                                </h4>
                            )}
                            {product.productTemplateNumber == 3 && (
                                <h4 className="p-6 text-gray-900">
                                    Add Product Form for template 3
                                </h4>
                            )}
                            {product.productTemplateNumber == 4 && (
                                <h4 className="p-6 text-gray-900">
                                    Add Product Form for template 4
                                </h4>
                            )}
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default AddProductForm;
