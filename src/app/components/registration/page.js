"use client";
import { useState } from "react";

const registration = () => {
  const [userType, setUserType] = useState("individual");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-lg-7 registration-section">
          <h2 className="section-title">Registration Section</h2>

          <div className="mb-4">
            <label htmlFor="userType" className="form-label">
              Select User Type
            </label>
            <select
              id="userType"
              className="form-select"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          {userType === "individual" ? (
            <div id="individualForm">
              <h3 className="mb-3">Individual Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    Select City
                  </label>
                  <select id="city" className="form-select" required>
                    <option>Select your city</option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                  </select>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="form-check-input"
                    required
                  />
                  <label htmlFor="terms" className="form-check-label">
                    Agree to Terms of Service
                  </label>
                </div>

                <button type="submit" className="btn btn-custom btn-block">
                  Register
                </button>
              </form>
            </div>
          ) : (
            <div id="businessForm" className="mt-5">
              <h3 className="mb-3">Business Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="businessName" className="form-label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    className="form-control"
                    placeholder="Enter your business name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="businessDesc" className="form-label">
                    Business Description
                  </label>
                  <textarea
                    id="businessDesc"
                    className="form-control"
                    rows="3"
                    placeholder="Enter your business description"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="businessEmail" className="form-label">
                    Business Email ID
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    className="form-control"
                    placeholder="Enter your business email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="accountHolder" className="form-label">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    id="accountHolder"
                    className="form-control"
                    placeholder="Enter the account holder's name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="form-control"
                    placeholder="Enter the designation"
                    required
                  />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="termsBusiness"
                    className="form-check-input"
                    required
                  />
                  <label htmlFor="termsBusiness" className="form-check-label">
                    Agree to Terms of Service
                  </label>
                </div>

                <button type="submit" className="btn btn-custom btn-block">
                  Register Business
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="col-lg-5 d-flex align-items-center">
          <img
            src="/vehicle-image.jpg"
            alt="Vehicles being tested"
            className="img-right"
          />
        </div>
      </div>
    </section>
  );
};

export default registration;
