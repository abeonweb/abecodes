import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
// import "animate.css"
import "../css/Form.css"

export default function ContactForm(props) {

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        policyChecked: false
    }

    const handleSubmit = (values, helpers) => {

        console.log(values)
    }

    const validationSchema = Yup.object({
        firstname: Yup.string()
            .max(20, "Maximum 20 characters")
            .required("Required"),
        lastname: Yup.string()
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
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {props => {
                    const { handleBlur, handleChange, values, touched, errors } = props
                    console.log(props)
                    return (
                        <Form>
                            <p className="form-info">Leave your contact information and a detailed message.</p>
                            <p className="form-info">I will get in contact using the information you provide.</p>
                            <div className="input-container">
                                <input
                                    className="form-input"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.firstname}
                                    type="text"
                                    name="firstname"
                                    id=""
                                    aria-label="firstname"
                                    placeholder="First Name"
                                />
                                {touched.firstname && errors.firstname &&
                                    <p className="error-message">{errors.firstname}</p>
                                }
                            </div>

                            <div className="input-container">
                                <input
                                    className="form-input"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.lastname}
                                    type="text"
                                    name="lastname"
                                    id=""
                                    aria-label="lastname"
                                    placeholder="Last Name"
                                />
                                {touched.lastname && errors.lastname &&
                                    <p className="error-message">{errors.lastname}</p>
                                }
                            </div>

                            <div className="input-container">
                                <input
                                    className="form-input"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    type="email"
                                    name="email"
                                    id=""
                                    aria-label="email"
                                    placeholder="Email"
                                />
                                {touched.email && errors.email &&
                                    <p className="error-message">{errors.email}</p>
                                }
                            </div>

                            <div className="input-container">
                                    <textarea
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.message}
                                        type="text"
                                        name="message"
                                        className="form-input message"
                                        aria-label="message"
                                        placeholder="Message"
                                    />
                                    {touched.message && errors.message &&
                                        <p className="error-message">{errors.message}</p>
                                    }
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

