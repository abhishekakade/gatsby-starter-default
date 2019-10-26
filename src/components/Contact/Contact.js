import React from "react"
import "./Contact.css"
// import { Link } from "gatsby"
import { Phone, Whatsapp } from "styled-icons/icomoon"
import { Send } from "styled-icons/boxicons-solid"
import {
  Person,
  AlternateEmail,
  ShortText,
  Subject,
} from "styled-icons/material"

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Enquiries</h3>
          <p>
            Tap on the contact number below to call us for any enquiries,
            questions or commendations.
          </p>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            Or get a quote.
          </p>
          <p
            style={{
              padding: "1rem",
            }}
          >
            <a className="contact-number" href="tel:+91-9004899758">
              <Phone className="phone" />
              +91-9004899758
            </a>
          </p>

          <p
            style={{
              padding: "0.5rem 1rem 1rem 1rem",
            }}
          >
            <a className="whatsapp-number" href="https://wa.me/919326897731">
              <Whatsapp className="whatsapp" />
              Text us on WhatsApp
            </a>
          </p>

          <p>Or fill out this form below and we will get back to you.</p>

          <form
            name="Sai India Gypsum - Contact Form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="Sai India Gypsum - Contact Form"
            />

            {/* <form
            action="mailto:info@saiindiagypsum.com&"
            method="post"
            encType="text/plain"
          > */}
            <h3>Contact Us</h3>
            <label>
              <p>
                <Person className="person" size="1rem"></Person>Name
              </p>
              <input type="text" name="name" id="name" required />
            </label>
            <label>
              <p>
                <AlternateEmail
                  className="alternate-email"
                  size="1rem"
                ></AlternateEmail>
                Email
              </p>
              <input type="email" name="email" id="email" required />
            </label>
            <label>
              <p>
                <ShortText className="short-text" size="1rem"></ShortText>
                Subject
              </p>
              <input type="text" name="subject" id="subject" required />
            </label>
            <label>
              <p>
                <Subject className="subject-icon" size="1rem"></Subject>Message
              </p>
              <textarea name="message" id="message" rows="5" />
            </label>
            <button id="submit-btn" type="submit" value="Send">
              Send<Send className="send-icon" size="1rem"></Send>
            </button>
          </form>
        </div>

        <div className="address-info">
          <h3>Head Office</h3>
          <address>
            Sai India Gypsum Products Pvt. Ltd.
            <br /> Tiffany, Level 1,
            <br /> Hiranandani Estate,
            <br /> Ghodbunder Road,
            <br /> Thane West - 400607,
            <br />
            Maharashtra, India. <br />
            <br />
            ​info@saiindiagypsum.com <br />
            Tel: +91-9004899758
          </address>

          <h3>Careers</h3>
          <p>
            To apply for a job with Sai India Gypsum, please send a cover letter
            together with your C.V. to: info@saiindiagypsum.com
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
