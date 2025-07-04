import { ModalSearch } from "../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from "../services/url";

const ForgetPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await axios
      .post(`${BaseUrl}/forget-password`, {
        email,
      })
      .then((res) => {
        const { status } = res.data;
        if (status === "ok") {
          toast.success("Reset password link sent");
        }
      });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <ToastContainer position="top-center" />
      <ModalSearch />
      <div className="container-fluid page-header py-5">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active text-white">Forgot Password</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="my5">
              <h3 className="mt-3 mb-3">Forgot Password</h3>
            </div>

            <div className="col-lg-7">
              <form action="" className="" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit"
                  value={submitted ? "Please wait..." : "Send"}
                  disabled={submitted}
                />
              </form>
            </div>
            <Link to="/login">have an account? Login</Link>

            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
