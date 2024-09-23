"use client";
import Link from "next/link";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Vehicle Emissions Testing</title>
      </head>
      <body className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-light sticky-navbar">
          <div className="container">
            <Link href="/" className="navbar-brand">
              BrandLogo
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="/components/about" className="nav-link ">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/faqs" className="nav-link">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/components/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              </ul>
              <Link
                href="/components/login"
                className="btn btn-cta d-none d-lg-block"
              >
                Login / Register
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-grow-1">{children}</main>
        <footer className="footer text-center">
          <div className="container">
            <p>&copy; 2024 Vehicle Emissions Testing. All rights reserved.</p>
            <Link href="/components/contactUs">Contact Us</Link> |
            <Link href="/components/LegalAndCompliance">
              Legal and Compliance
            </Link>{" "}
            |<Link href="/blog">Blogs and Articles</Link> |
            <Link href="/feedback">Feedback</Link>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
