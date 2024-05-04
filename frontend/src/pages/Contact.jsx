import { useDocumentTitle } from "../services/title";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from "../services/url";

const Contact = () => {
  window.scrollTo(0, 0);
  useDocumentTitle("Fruitables - Contact");
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post(`${BaseUrl}/contact_us`, {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      })
      .then((res) => {
        setIsLoading(false);
        toast.success(res.data.message);
        setInputs({});
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.info("Your request can't be processed at the moment.");
      });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/contact">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">Contact</li>
        </ol>
      </div>

      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="p-5 bg-light rounded">
            <div className="row g-4">
              <div className="col-12">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "700px" }}
                >
                  <h1 className="text-primary">Get in touch</h1>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="h-100 rounded">
                  <iframe
                    className="rounded w-100"
                    title="frame"
                    style={{ height: "400px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-7">
                <form action="" className="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Your Name"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                  />
                  <textarea
                    className="w-100 form-control border-0 mb-4"
                    rows="5"
                    cols="10"
                    placeholder="Your Message"
                    name="message"
                    onChange={handleChange}
                  ></textarea>
                  <input
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                    value={isLoading ? "Please wait..." : "Submit"}
                    disabled={isLoading}
                  />
                </form>
              </div>
              <div className="col-lg-5">
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Address</h4>
                    <p className="mb-2">
                      21 lea village Birmingham United Kingdom
                    </p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded mb-4 bg-white">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Mail Us</h4>
                    <p className="mb-2">debbyshantelcounty@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex p-4 rounded bg-white">
                  <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h4>Telephone</h4>
                    <p className="mb-2">(+44 7778488796)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
