import { useForm } from "@inertiajs/react";
import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AiOutlinePlusCircle } from "react-icons/ai";

const AddReviewsSec = ({ product }) => {
    // console.log(product.template1_input);
    // const [divList, setDivList] = useState([]);
    // const [reviewCount, setReviewCount] = useState(0); // Change initial value to 0
    const [showNewForm, SetShowNewForm] = useState(false);

    const UpdateReviewForm = (item) => {
        // console.log(item);

        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputReviewID: item.item.template1InputReviewID,
            name: item.item.name,
            star: item.item.star,
            tagline: item.item.tagline,
            date: item.item.date,
            description: item.item.description,
            status: item.item.status,
            new: false,
        });

        // console.log(data);

        const submit = (e) => {
            e.preventDefault();
            // console.log(data);
            post(route("template1CreateReview"));
        };
        return (
            <form className="reviews" onSubmit={submit}>
                <div className="reviewsItem">
                    <div className="reviewsItems">
                        <div className="form-group my-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>

                        {data.star == "" ? (
                            <div className="form-group my-2">
                                <select
                                    className="form-control custom-select"
                                    defaultValue={"DEFAULT"}
                                    name="star"
                                    onChange={(e) =>
                                        setData("star", e.target.value)
                                    }
                                >
                                    <option value="DEFAULT" disabled hidden>
                                        Stars
                                    </option>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                            </div>
                        ) : (
                            <div className="form-group my-2">
                                <select
                                    className="form-control custom-select"
                                    defaultValue={data.star}
                                    name="star"
                                    onChange={(e) =>
                                        setData("star", e.target.value)
                                    }
                                >
                                    <option value="DEFAULT" disabled hidden>
                                        Stars
                                    </option>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                            </div>
                        )}
                        <div className="form-group my-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Review tagline"
                                value={data.tagline}
                                onChange={(e) =>
                                    setData("tagline", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Images"
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Timestamps"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-check my-2 mx-0 form-switch">
                            <label
                                className="form-check-label"
                                htmlFor="switchButton"
                            >
                                Status (verified or non-verified)
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="switchButton"
                                name="status"
                                checked={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.checked)
                                }
                            />
                        </div>
                        <div className="form-group my-2 descriptionField">
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="Description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="submitBtn mx-0">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    const SetReviewForm = () => {
        // console.log(item);

        const { data, setData, post, processing, errors, reset } = useForm({
            productSlug: product.productSlug,
            productTemplateNumber: product.productTemplateNumber,
            template1InputID: product.template1_input.template1InputID,
            name: "",
            star: "",
            tagline: "",
            date: "",
            description: "",
            status: 0,
            new: true,
        });

        // console.log(data);

        const submit = (e) => {
            e.preventDefault();
            console.log(data);
            post(route("template1CreateReview"));
        };
        return (
            <form className="reviews" onSubmit={submit}>
                <div className="reviewsItem">
                    <div className="reviewsItems">
                        <div className="form-group my-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                        </div>

                        {data.star == "" ? (
                            <div className="form-group my-2">
                                <select
                                    className="form-control custom-select"
                                    defaultValue={"DEFAULT"}
                                    name="star"
                                    onChange={(e) =>
                                        setData("star", e.target.value)
                                    }
                                >
                                    <option value="DEFAULT" disabled hidden>
                                        Stars
                                    </option>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                            </div>
                        ) : (
                            <div className="form-group my-2">
                                <select
                                    className="form-control custom-select"
                                    defaultValue={data.star}
                                    name="star"
                                    onChange={(e) =>
                                        setData("star", e.target.value)
                                    }
                                >
                                    <option value="DEFAULT" disabled hidden>
                                        Stars
                                    </option>
                                    <option value="1">Star 1</option>
                                    <option value="2">Star 2</option>
                                    <option value="3">Star 3</option>
                                    <option value="4">Star 4</option>
                                    <option value="5">Star 5</option>
                                </select>
                            </div>
                        )}
                        <div className="form-group my-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Review tagline"
                                value={data.tagline}
                                onChange={(e) =>
                                    setData("tagline", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="file"
                                className="form-control"
                                placeholder="Images"
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Timestamps"
                                value={data.date}
                                onChange={(e) =>
                                    setData("date", e.target.value)
                                }
                            />
                        </div>
                        <div className="form-check my-2 mx-0 form-switch">
                            <label
                                className="form-check-label"
                                htmlFor="switchButton"
                            >
                                Status (verified or non-verified)
                            </label>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="switchButton"
                                name="status"
                                checked={data.status}
                                onChange={(e) => {
                                    console.log(e.target.checked);
                                    setData("status", e.target.checked);
                                }}
                            />
                        </div>
                        <div className="form-group my-2 descriptionField">
                            <textarea
                                name=""
                                className="form-control"
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="Description"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="submitBtn mx-0">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        );
    };

    // const handleAppendDiv = () => {
    //     if (reviewCount < 20) {
    //         console.log(reviewCount);
    //         // console.log(product.template1_input.template1_input_reviews[reviewCount])
    //         const newDiv = (
    //             <>
    //                 <form className="reviews">
    //                     <div className="reviewsItem">
    //                         <div className="reviewsItems">
    //                             <div className="form-group my-2">
    //                                 <input
    //                                     type="text"
    //                                     className="form-control"
    //                                     placeholder="Name"
    //                                 />
    //                             </div>
    //                             <div className="form-group my-2">
    //                                 {/* <input type="number" className="form-control custom-select" placeholder="Stars" /> */}
    //                                 <select
    //                                     className="form-control custom-select"
    //                                     defaultValue={"DEFAULT"}
    //                                 >
    //                                     <option value="DEFAULT" disabled hidden>
    //                                         Stars
    //                                     </option>
    //                                     <option value="option1">Star 1</option>
    //                                     <option value="option2">Star 2</option>
    //                                     <option value="option3">Star 3</option>
    //                                     <option value="option4">Star 4</option>
    //                                     <option value="option5">Star 5</option>
    //                                 </select>
    //                             </div>
    //                             <div className="form-group my-2">
    //                                 <input
    //                                     type="text"
    //                                     className="form-control"
    //                                     placeholder="Review tagline"
    //                                 />
    //                             </div>
    //                             <div className="form-group my-2">
    //                                 <input
    //                                     type="file"
    //                                     className="form-control"
    //                                     placeholder="Images"
    //                                 />
    //                             </div>
    //                             <div className="form-group my-2">
    //                                 <input
    //                                     type="date"
    //                                     className="form-control"
    //                                     placeholder="Timestamps"
    //                                 />
    //                             </div>
    //                             <div className="form-check my-2 mx-0 form-switch">
    //                                 <label
    //                                     className="form-check-label"
    //                                     htmlFor="switchButton"
    //                                 >
    //                                     Status (verified or non-verified)
    //                                 </label>
    //                                 <input
    //                                     className="form-check-input"
    //                                     type="checkbox"
    //                                     id="switchButton"
    //                                 />
    //                             </div>
    //                             <div className="form-group my-2 descriptionField">
    //                                 <textarea
    //                                     name=""
    //                                     className="form-control"
    //                                     id=""
    //                                     cols="30"
    //                                     rows="5"
    //                                     placeholder="Description"
    //                                 />
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="submitBtn mx-0">
    //                         <button type="submit" className="btn btn-primary">
    //                             Save
    //                         </button>
    //                     </div>
    //                 </form>
    //             </>
    //         );

    //         setReviewCount((prevCount) => prevCount + 1);
    //         setDivList((prevDivList) => [...prevDivList, newDiv]);
    //     }
    // };

    // useEffect(() => {
    //     product.template1_input.template1_input_reviews.forEach(() => {
    //         handleAppendDiv();
    //         // console.log(1);
    //         // console.log(product.template1_input.template1_input_reviews.length);
    //     });
    // }, []);

    const showForm = () => {
        if (product.template1_input.template1_input_reviews.length <= 20) {
            SetShowNewForm(true);
        } else {
            window.alert("20 Reviews are already added !");
        }
    };

    return (
        <section className="addReviewsSec">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="addReviews">
                            <div className="addReviewsHeading">
                                <h1>{product.productName}</h1>
                                <div className="templateOneLink">
                                    {/* <button onClick={handleAppendDiv}> */}
                                    <button onClick={showForm}>
                                        <AiOutlinePlusCircle size={20} />
                                        <span>Add</span>
                                    </button>
                                </div>
                            </div>
                            <div className="addReviewsItem">
                                {product.template1_input.template1_input_reviews
                                    .length > 0
                                    ? product.template1_input.template1_input_reviews.map(
                                          (item, key) => (
                                              <div key={key}>
                                                  <div className="reviewsItemHeading mt-4">
                                                      <h4>Review {key + 1}</h4>
                                                  </div>
                                                  <UpdateReviewForm
                                                      item={item}
                                                  />
                                              </div>
                                          )
                                      )
                                    : null}

                                {showNewForm && (
                                    <>
                                        <div className="reviewsItemHeading mt-4">
                                            <h4>New Review</h4>
                                        </div>
                                        <SetReviewForm />
                                    </>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddReviewsSec;
