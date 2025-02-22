import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
const About = () => {
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
          About Us
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-lg-6">
            <div className="row g-2">
              <div
                className="col-6 position-relative wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="about-experience bg-secondary rounded">
                  <h1 className="display-1 mb-0">25</h1>
                  <small className="fs-5 fw-bold">Years Experience</small>
                </div>
              </div>
              <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                <img className="img-fluid rounded" src="img/service-1.jpg" />
              </div>
              <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                <img className="img-fluid rounded" src="img/service-2.jpg" />
              </div>
              <div className="col-6 wow fadeIn" data-wow-delay="0.5s">
                <img className="img-fluid rounded" src="img/service-3.jpg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="section-title bg-white text-start text-primary pe-3">
              About Us
            </p>
            <h1 className="mb-4">Know About Our Dairy Farm &amp; Our History</h1>
            <p className="mb-4">
            Our dairy farm is dedicated to producing the highest quality milk and dairy products, sourced from healthy, well-cared-for cows. We focus on sustainable farming practices to ensure the best for both our animals and the environment.
            </p>
            <div className="row g-5 pt-2 mb-5">
              <div className="col-sm-6">
                <img className="img-fluid mb-4" src="img/service.png" alt="" />
                <h5 className="mb-3">Dedicated Services</h5>
                <span>
                Providing personalized, reliable services to meet all your dairy needs with care and commitment.
                </span>
              </div>
              <div className="col-sm-6">
                <img className="img-fluid mb-4" src="img/product.png" alt="" />
                <h5 className="mb-3">Organic Products</h5>
                <span>
                Enjoy the purity of nature with our 100% organic, farm-fresh dairy products.
                </span>
              </div>
            </div>
            <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Banner Start */}
    <div
      className="container-fluid banner my-5 py-5"
      data-parallax="scroll"
      data-image-src="img/banner.jpg"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="row g-4 align-items-center">
              <div className="col-sm-4">
                <img
                  className="img-fluid rounded"
                  src="img/banner-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h2 className="text-white mb-3">We Sell Best Dairy Products</h2>
                <p className="text-white mb-4">
                We offer the finest dairy products, crafted with care for unmatched quality and taste.
                </p>
                <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="row g-4 align-items-center">
              <div className="col-sm-4">
                <img
                  className="img-fluid rounded"
                  src="img/banner-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-sm-8">
                <h2 className="text-white mb-3">
                  We Deliver Fresh Mild Worldwide
                </h2>
                <p className="text-white mb-4">
                We deliver fresh, high-quality milk worldwide, ensuring it reaches you at its best.
                </p>
                <a className="btn btn-secondary rounded-pill py-2 px-4" href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner End */}
    {/* Team Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 500 }}
        >
          <p className="section-title bg-white text-center text-primary px-3">
            Our Team
          </p>
          <h1 className="mb-5">Experienced Team Members</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded p-4">
              <img
                className="img-fluid rounded mb-4"
                src="img/team-1.jpg"
                alt=""
              />
              <h5>Adam Crew</h5>
              <p className="text-primary">Founder</p>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded p-4">
              <img
                className="img-fluid rounded mb-4"
                src="img/team-2.jpg"
                alt=""
              />
              <h5>Doris Jordan</h5>
              <p className="text-primary">Veterinarian</p>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded p-4">
              <img
                className="img-fluid rounded mb-4"
                src="img/team-3.jpg"
                alt=""
              />
              <h5>Jack Dawson</h5>
              <p className="text-primary">Farmer</p>
              <div className="d-flex justify-content-center">
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
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
export default About;