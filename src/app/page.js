"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="hero-banner">
        <video src={"/videos/emission.mp4"} autoPlay muted loop />
        <div className="overlay"></div>
        <div className="content text-center">
          <h1 style={{ fontSize: "5rem", color: "white" }}>
            Vehicle Emissions Testing
          </h1>
          <p>Your reliable partner in ensuring a cleaner environment</p>
          <Link
            href="/components/scheduleTest"
            className="btn btn-lg btn-primary cta-btn"
          >
            Schedule a Test
          </Link>
        </div>
      </section>

      {/* About Section */}
      <div className="about">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-md-12">
              <Image
                src={"/assets/carAbout.jpg"}
                alt="Car"
                width={640}
                height={430}
              />
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="section-header text-left">
                <p>Introduction</p>
                <h2>Emission Testers</h2>
              </div>
              <div className="about-content">
                <p>
                  We provide fast, accurate emission testing to ensure your
                  vehicle complies with environmental standards.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Comprehensive emissions inspection
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Exhaust system analysis
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Fuel efficiency checks
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>
                    Catalytic converter testing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="my-5">
        <div className="container">
          <div className="section-header text-center">
            <p>What We Do?</p>
            <h2>Premium Vehicle Emissions Testing</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Exterior Inspection</h3>
                  <p>
                    We visually inspect the vehicle’s exterior components to
                    ensure the exhaust system is intact and free of damage that
                    could affect emissions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Interior Air Quality Check</h3>
                  <p>
                    Our team checks for cabin air quality, ensuring your
                    vehicle's air filters contribute to a healthier, more
                    environmentally friendly driving experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Vacuum Leak Testing</h3>
                  <p>
                    We test for vacuum leaks that could lead to poor engine
                    performance and higher emissions, helping you maintain an
                    efficient exhaust system.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Catalytic Converter Testing</h3>
                  <p>
                    We assess the performance of your catalytic converter, a
                    crucial component for reducing harmful emissions and
                    ensuring your vehicle meets regulatory standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Exhaust System Inspection</h3>
                  <p>
                    We thoroughly check for leaks or damage in the exhaust
                    system to prevent excess emissions and maintain vehicle
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Fuel System Cleaning</h3>
                  <p>
                    Our fuel system cleaning helps remove buildup in the engine,
                    ensuring cleaner fuel combustion and lower emissions output.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Oil Change & Emission Control</h3>
                  <p>
                    Regular oil changes reduce engine wear and help maintain
                    optimal emission levels by keeping the engine running
                    smoothly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="border border-1 rounded p-4 h-100">
                <div>
                  <h3>Brake System Check</h3>
                  <p>
                    While brakes themselves don’t affect emissions, we ensure
                    they are working efficiently to prevent strain on the
                    vehicle, which can indirectly impact fuel consumption and
                    emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Review</p>
            <h2>Customer Testimonials</h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <Image
                    src={"/assets/emis1.jpeg"}
                    alt="Image1"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="#">Ensuring Clean Air</a>
                  </h3>
                  <p>
                    "Emission testing ensures vehicles meet environmental
                    standards by measuring pollutant levels. Regular testing
                    helps reduce harmful emissions and protect air quality."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <Image
                    src={"/assets/emis2.jpeg"}
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="#">
                      Critical Role of Emission Testing in Reducing Vehicle
                      Pollution
                    </a>
                  </h3>
                  <p>
                    "Emission testing plays a crucial role in reducing vehicle
                    pollutants and maintaining environmental health."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-item">
                <div className="blog-img">
                  <Image
                    src={"/assets/emis3.jpg"}
                    alt="Image"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="blog-text">
                  <h3>
                    <a href="#">A Key to Cleaner Air and Safer Vehicles</a>
                  </h3>
                  <p>
                    "Through emission testing, we can significantly reduce
                    harmful pollutants, ensuring cleaner air and more
                    environmentally friendly transportation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container testimonials-section text-center py-5">
        <div className="section-header text-center">
          <p>Customers Review</p>
          <h2>What Our Customers Say</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-1.jpg"}
                alt="Customer 1"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Amazing service! My car's emissions were quickly tested, and
                the team was professional."
              </div>
              <div className="customer-name">John Doe</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-2.jpg"}
                alt="Customer 2"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★☆</div>
              <div className="testimonial-content">
                "Great experience. The team explained the emission test process
                in detail."
              </div>
              <div className="customer-name">Jane Smith</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-3.jpg"}
                alt="Customer 3"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Quick and efficient! Highly recommend their emission testing
                services."
              </div>
              <div className="customer-name">David Brown</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-4.jpg"}
                alt="Customer 4"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Very friendly staff and professional service. Will definitely
                come back!"
              </div>
              <div className="customer-name">Sarah Lee</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-5.jpg"}
                alt="Customer 5"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★☆</div>
              <div className="testimonial-content">
                "The emission test was done quickly, and the results were
                explained well."
              </div>
              <div className="customer-name">Michael Johnson</div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="testimonial-card h-100">
              <Image
                src={"/assets/team-6.jpg"}
                alt="Customer 6"
                width={40}
                height={30}
              />
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-content">
                "Excellent service! I'll definitely recommend them to friends
                and family."
              </div>
              <div className="customer-name">Emily Davis</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div>
          <h2 className="section-title">Certifications & Accreditations</h2>
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box">
                <Image
                  src={"/assets/certificate1.jpg"}
                  alt="Certification 1"
                  className="w-100"
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box">
                <Image
                  src={"/assets/certificate2.png"}
                  alt="Certification 2"
                  className="w-100"
                  width={400}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="box">
                <Image
                  src={"/assets/certificate3.jpg"}
                  alt="Certification 3"
                  className="w-100"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <p>Contact us</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-form">
                <h3 className="form-heading">Get in Touch</h3>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">
                    Send Message
                  </button>
                </form>

                <div className="social-icons mt-4 text-center">
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 contact-image">
              <Image
                src={"/assets/emis4.jpg"}
                alt="Contact Us Image"
                width={640}
                height={590}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
