"use client";

import { db } from "../../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const ScheduleTest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const addDataTofirebase = async (name, email, phone) => {
    try {
      const docRef = await addDoc(collection(db, "scheduleTest"), {
        name: name,
        email: email,
        phone: phone,
      });
      console.log("documente with ID", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding documents", error);
      return false;
    }
  };

  const validate = () => {
    let errors = {};

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.name)) {
      errors.name = "Name must not contain numbers or special characters.";
    } else if (formData.name.length > 50) {
      errors.name = "Name must be no longer than 50 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\-() ]{7,}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataTofirebase(
      formData.name,
      formData.email,
      formData.phone
    );

    if (added) {
      handleReset();
      alert("Data add to firestore DB !!");
    }

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    setErrors({});
  };

  return (
    <div>
      {/* Form Section for Scheduling a Test */}
      <section className="container my-5">
        <div className="form-section mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="form-header">Schedule a Test</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary w-100 mt-2"
              onClick={handleReset}
            >
              Clear
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        .form-section {
          background-color: #ffffff;
          padding: 40px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .form-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .is-invalid {
          border-color: #dc3545;
        }
        .invalid-feedback {
          color: #dc3545;
        }
      `}</style>
    </div>
  );
};

export default ScheduleTest;
