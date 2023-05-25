import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Forms.css";
import image from '../formik/night-1.jpg'

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  country: Yup.string().required("Country is required"),
});

const Forms = () => {
  const initialValues = {
    name: "",
    email: "",
    country: "",
  };

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // Display form data in the console
    resetForm();
  };

  return (
    <div className="form-container slide-in-from-left">
         <div className="form-image">
        <img src={image}alt="Form Image" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={`form ${showForm ? "fade-in" : ""}`}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <Field
              type="text"
              id="country"
              name="country"
              className="form-control"
            />
            <ErrorMessage
              name="country"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Forms;
