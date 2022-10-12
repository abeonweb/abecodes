import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
// import "animate.css"
import "../css/Form.css"

function Form(props) {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            policyChecked: false
        },
        onSubmit: (values) => {
            //to be continued
        },

        validationSchema: Yup.object({
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
    })

    return (
        <section id="form" className="form-container">
            <h2 className="title form-page-title">Contact Form</h2>
            <form name="contact" onSubmit={formik.onSubmit} className="form" data-netlify="true" method="post" action="/pages/Success">
                <p className="form-info">Leave your contact information and a detailed message.</p>
                <p className="form-info">I will get in contact using the information you provide.</p>
                <div className="input-container">
                    <input
                        className="form-input"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        type="text"
                        name="firstname"
                        id=""
                        aria-label="firstname"
                        placeholder="First Name"
                    />
                    {formik.touched.firstname && formik.errors.firstname ?
                        <p className="error-message">{formik.errors.firstname}</p>
                        :
                        null
                    }
                </div>

                <div className="input-container">
                    <input
                        className="form-input"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        type="text"
                        name="lastname"
                        id=""
                        aria-label="lastname"
                        placeholder="Last Name"
                    />
                    {formik.touched.lastname && formik.errors.lastname ?
                        <p className="error-message">{formik.errors.lastname}</p>
                        :
                        null
                    }
                </div>

                <div className="input-container">
                    <input
                        className="form-input"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        type="email"
                        name="email"
                        id=""
                        aria-label="email"
                        placeholder="email"
                    />
                    {formik.touched.email && formik.errors.email ?
                        <p className="error-message">{formik.errors.email}</p>
                        :
                        null
                    }
                </div>

                <div className="input-container">
                    <div className="message-container">
                        <textarea
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            type="text"
                            name="policyChecked"
                            className="message"
                            aria-label="message"
                            placeholder="Message"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="form-btn-submit"
                    aria-label="submit button">
                    Send
                </button>
                {/* <p className="privacy-policy-statement">We respect your right to privacy.</p> */}
            </form>
        </section>
    )
}

export default Form