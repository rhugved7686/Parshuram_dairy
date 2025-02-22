"use client"

import Script from "next/script"
import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!form.current) return

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_jl78mza",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_51sk3x9",
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "N_0epytVK4pILRSjJ",
      )
      console.log(result.text)
      setSubmitStatus("success")
      form.current.reset()
    } catch (error) {
      console.error(error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Open+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      {/* Icon Font Stylesheet */}
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
      {/* Libraries Stylesheet */}
      <link href="lib/animate/animate.min.css" rel="stylesheet" />
      <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
      <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      {/* Template Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }} />
      </div>
      {/* Spinner End */}
      {/* Topbar Start */}
      <div className="container-fluid bg-dark px-0">
    <div className="row g-0 d-none d-lg-flex">
      <div className="col-lg-6 ps-5 text-start">
        <div className="h-100 d-inline-flex align-items-center text-light">
          <span>Follow Us:</span>
          <a className="btn btn-link text-light" href="https://www.facebook.com/profile.php?id=61573442461719">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-link text-light" href="https://www.instagram.com/parshuram_dairy/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-6 text-end">
        <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
          <span className="me-2 fw-semi-bold">
            <i className="fa fa-phone-alt me-2" />
            Call Us:
          </span>
          <span>+91 9172474779</span>
        </div>
      </div>
    </div>
  </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">Parshuram Dairy Farm</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="/" className="nav-item nav-link">
              Home
            </a>
            <a href="/About" className="nav-item nav-link">
              About
            </a>
            <a href="/Services" className="nav-item nav-link">
              Services
            </a>
            <a href="/Products" className="nav-item nav-link">
              Products
            </a>
            <a href="/Contact" className="nav-item nav-link active">
              Contact
            </a>
          </div>
          <div className="border-start ps-4 d-none d-lg-block">
            <button type="button" className="btn btn-sm p-0">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">Contact</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <p className="section-title bg-white text-center text-primary px-3">Contact Us</p>
            <h1 className="mb-5">If You Have Any Query, Please Contact Us</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Send us a message</h3>
              <p className="mb-4">
                Have a question or want to get in touch? Fill out the form below, and we'll get back to you as soon as
                possible.
              </p>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="user_name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="integer"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Contact No."
                        required
                      />
                      <label htmlFor="subject">Contact No.</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: 250 }}
                        required
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-secondary rounded-pill py-3 px-5" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                    {submitStatus === "success" && <p className="text-success mt-2">Message sent successfully!</p>}
                    {submitStatus === "error" && (
                      <p className="text-danger mt-2">Failed to send message. Please try again.</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h3 className="mb-4">Contact Details</h3>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-map-marker-alt text-body" />
                </div>
                <div className="ms-3">
                  <h6>Our Office</h6>
                  <span>Kharadi, Pune</span>
                </div>
              </div>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-phone-alt text-body" />
                </div>
                <div className="ms-3">
                  <h6>Call Us</h6>
                  <span>+91 9172474779</span>
                </div>
              </div>
              <div className="d-flex border-bottom-0 pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-envelope text-body" />
                </div>
                <div className="ms-3">
                  <h6>Mail Us</h6>
                  <span>parshuramdairyfarm@gmail.com</span>
                </div>
              </div>
              <iframe
                className="w-100 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
      {/* Footer Start */}
      <div
    className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Our Office</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Kharadi, Pune
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 9172474779
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            parshuramdairyfarm@gmail.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <a className="btn btn-link" href="/About">
            About Us
          </a>
          <a className="btn btn-link" href="/Contact">
            Contact Us
          </a>
          <a className="btn btn-link" href="/Services">
            Our Services
          </a>
          <a className="btn btn-link" href="/Contact">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Business Hours</h5>
          <p className="mb-1">Monday - Friday</p>
          <h6 className="text-light">09:00 am - 07:00 pm</h6>
          <p className="mb-1">Saturday</p>
          <h6 className="text-light">09:00 am - 12:00 pm</h6>
          <p className="mb-1">Sunday</p>
          <h6 className="text-light">Closed</h6>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
      {/* Footer End */}
      {/* Copyright Start */}
      <div className="container-fluid bg-secondary text-body copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="fw-semi-bold" href="https://cobaztech.com">
            Cobaztech
          </a>
          , All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By{" "}
          <a className="fw-semi-bold" href="https://cobaztech.com">
            Cobaztech
          </a>
        </div>
      </div>
    </div>
  </div>
      {/* Copyright End */}
      {/* Back to Top */}
      <a href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up" />
      </a>

      <Script src="https://code.jquery.com/jquery-3.4.1.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="lib/wow/wow.min.js"></Script>
      <Script src="lib/easing/easing.min.js"></Script>
      <Script src="lib/waypoints/waypoints.min.js"></Script>
      <Script src="lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="lib/counterup/counterup.min.js"></Script>
      <Script src="lib/parallax/parallax.min.js"></Script>
      <Script src="lib/lightbox/js/lightbox.min.js"></Script>
      <Script src="js/main.js"></Script>
    </>
  )
}

export default ContactUs;

