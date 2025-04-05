import React, { useState, useEffect } from "react";
import mail from "./images/mail.png";
import location from "./images/location.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const mailtoLink = `mailto:dhanushri1702@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the default email client with the pre-filled details
    window.location.href = mailtoLink;
  };

  return (
    <footer className="bg-custom-wave py-5">
      <h1
        className="skillsheading py-5"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        CONTACT
      </h1>
      <div className="container">
        <div className="row justify-content-between">
          <div
            className="col-md-6 col-12 mb-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3
              className="mb-4 work"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              LET'S WORK TOGETHER!
            </h3>
            <p
              className="mb-4 ty"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Thank you for visiting my portfolio! Contact me at{" "}
              <a
                href="mailto:dhanushri1702@gmail.com"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                dhanushri1702@gmail.com
              </a>{" "}
              for inquiries or collaborations.
              <p>Follow me on LinkedIn or Twitter
              for updates.</p>
            </p>

            <div
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                src={mail}
                alt="Mail Icon"
                className="me-2 mailicon"
              />
              <span className="mailspan">dhanushri1702@gmail.com</span>
            </div>
            <div
              className="d-flex mb-4"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src={location}
                alt="Location Icon"
                className="me-2 loc"
              />
              <span className="Locationspan">Madurai-625016</span>
            </div>
          </div>

          <div
            className="col-md-5 col-12"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <div
              className="form-container"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-aos="flip-left"
                data-aos-delay="1100"
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-aos="flip-left"
                data-aos-delay="1200"
              />
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                data-aos="flip-left"
                data-aos-delay="1300"
              ></textarea>
              <button
                className="btn submitbtn text-white w-100"
                data-aos="fade-up"
                data-aos-delay="1400"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="wave-container position-relative" data-aos="fade-up" data-aos-delay="1500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#6B9080"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,138.7C672,107,768,85,864,80C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <p className="wave-text text-white position-absolute w-100 text-center">
          Crafted by Dhanushri C
        </p>
      </div>
    </footer>
  );
}

export default Contact;
