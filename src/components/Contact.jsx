import { useState } from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((prevValue) => !prevValue);
  }

  return (
    <section id="contact" className="section contact">
      <h1 className="title contact-title">Have questions? Let&apos;s chat.</h1>
      <div className="contact-container">
        <div className="email-container">
          <h3>Shoot me an email</h3>
          <a href="mailto:contact@abecodes.com" className="email-address">
            contact@abecodes.com
          </a>
        </div>

        <div className="form--display-container">
          <h3>Or use the contact form below</h3>
          <button onClick={handleClick} className="contact-form-btn">
            {!showForm ? "Contact Form" : "Close Form"}
          </button>
          {showForm && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
