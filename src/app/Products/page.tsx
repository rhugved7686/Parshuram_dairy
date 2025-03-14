import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import React from 'react'

const Products = () => {
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
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet"
  />
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
    <div
      className="spinner-border text-primary"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    />
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
        <a href="/" className="nav-item nav-link active">
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
        <a href="/Contact" className="nav-item nav-link">
          Contact
        </a>
      </div>
    </div>
  </nav>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        Products
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Product Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="section-title bg-white text-center text-primary px-3">
          Our Products
        </p>
        <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
      </div>
      <div className="row gx-4">
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-1.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Pure Milk
              </a>
              <span className="text-primary me-1">Rs.19.00</span>
              <span className="text-decoration-line-through">Rs.29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid pt-3 " src="img/product-2.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5 pt-5" href="">
              Cold Drink
              </a>
              <span className="text-primary me-1">Rs.19.00</span>
              <span className="text-decoration-line-through">Rs.29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-3.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Dairy Products
              </a>
              <span className="text-primary me-1">Rs.19.00</span>
              <span className="text-decoration-line-through">Rs.29.00</span>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src="img/product-4.jpg" alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Organic Food
              </a>
              <span className="text-primary me-1">Rs.19.00</span>
              <span className="text-decoration-line-through">Rs.29.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product End */}
  {/* Features Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <p className="section-title bg-white text-start text-primary pe-3">
            Why Us!
          </p>
          <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
          <p className="mb-4">
          People choose us because we prioritize quality and sustainability, delivering fresh, nutrient-packed dairy products directly from our farm. Our cows are treated with the utmost care, ensuring the healthiest milk and the best taste in every product. With a strong commitment to local farming and eco-friendly practices, we provide dairy that you can trust and feel good about.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Quality and Freshness: We deliver farm-fresh, nutrient-rich dairy products made with the highest standards of quality.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Animal Welfare: Our cows are raised with care, ensuring they produce the healthiest, most delicious milk.
          </p>
          <p>
            <i className="fa fa-check text-primary me-3" />
            Sustainability: We are committed to eco-friendly farming practices that support the environment and local agriculture.
          </p>
          <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">
            Explore More
          </a>
        </div>
        <div className="col-lg-6">
          <div className="rounded overflow-hidden">
            <div className="row g-0">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="text-center bg-primary py-5 px-4">
                  <img
                    className="img-fluid mb-4"
                    src="img/experience.png"
                    alt=""
                  />
                  <h1 className="display-6 text-white" data-toggle="counter-up">
                    25
                  </h1>
                  <span className="fs-5 fw-semi-bold text-secondary">
                    Years Experience
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="text-center bg-secondary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/award.png" alt="" />
                  <h1 className="display-6" data-toggle="counter-up">
                    183
                  </h1>
                  <span className="fs-5 fw-semi-bold text-primary">
                    Award Winning
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="text-center bg-secondary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/animal.png" alt="" />
                  <h1 className="display-6" data-toggle="counter-up">
                    2619
                  </h1>
                  <span className="fs-5 fw-semi-bold text-primary">
                    Total Animals
                  </span>
                </div>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="text-center bg-primary py-5 px-4">
                  <img className="img-fluid mb-4" src="img/client.png" alt="" />
                  <h1 className="display-6 text-white" data-toggle="counter-up">
                    51940
                  </h1>
                  <span className="fs-5 fw-semi-bold text-secondary">
                    Happy Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Features End */}
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
          <p className="mb-1">Monday - Sunday</p>
          <h6 className="text-light">07:00 am - 10:00 pm</h6>
          
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <p>Stay updated with the latest offers and updates from us.</p>
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
  <a
    href="/"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
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
export default Products;