import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
// import axios from "axios"
import * as Yup from "yup"
// import "animate.css"
import "../css/Form.css"

export default function ContactForm(props) {
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const initialValues = {
        name: "",
        email: "",
        message: ""
    }

    const handleSubmit = (values, helpers) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
        })
            .then(() => {
                // <Redirect to="/pages/success" />
                helpers.resetForm()
            })
            .catch(() => alert("There was an error. Please try again later."))
            .finally(()=> helpers.setSubmitting(false))

    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(20, "Maximum 20 characters")
            .required("Required"),
        email: Yup.string()
            .email("Not a valid email")
            .required("Required"),
        message: Yup.string()
            .max(500, "Maximum 500 characters")
            .required("Required")
    })

    return (
        <section id="form" className="form-container">
            <h2 className="title form-page-title">Contact Form</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {props => {
                    return (
                        <Form name="contact" action="/pages/success">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="form-info">Leave your contact information and a detailed message.</p>
                            <p className="form-info">I will get in contact using the information you provide.</p>
                            <div className="input-container">
                                <Field name="name" className="form-input" placeholder="Full Name" />
                                <ErrorMessage className="error-message" component="p" name="name" />
                            </div>

                            <div className="input-container">
                                <Field name="email" className="form-input" placeholder="Email" />
                                <ErrorMessage className="error-message" component="p" name="email" />
                            </div>

                            <div className="input-container">
                                <Field as="textarea" name="message" className="form-input message" placeholder="Message" />
                                <ErrorMessage className="error-message" component="p" name="message" />
                            </div>

                            <button
                                type="submit"
                                className="form-btn-submit"
                                aria-label="submit button">
                                Send
                            </button>
                            {/* <p className="privacy-policy-statement">We respect your right to privacy.</p> */}
                        </Form>
                    )
                }}
            </Formik>
        </section>
    )
}

