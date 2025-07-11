import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDocumentTitle } from '../services/title';
import { ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from "../services/url";

const Register = () => {
  useDocumentTitle("Fruitables - Register")
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // Check if confirm password is valid
    if (inputs.password !== inputs.confirmPassword) {
      toast.error("password and confirm password does not match")
      return;
    }
    setIsLoading(true);
    await axios
      .post(`${BaseUrl}/signup`, {
        phoneNo: inputs.phone,
        password: inputs.password,
        email: inputs.email,
        fullname: `${inputs.firstname} ${inputs.surname}`,
      })
      .then((res) => {
        const { data } = res;
        if (data.status === "ok") {
          toast.success(data.msg);
          navigate("/login");
          return;
        }
        toast.error(data.msg);
        navigate("/register");
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.msg);
        } else {
          toast.error("Registration unsuccessful, retry");
        }
        navigate("/register");
        console.log(err);
      });
  };


  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Welcome Back</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active text-white">Register</li>
        </ol>
      </div>
      <ToastContainer position="top-center"/>
      <div className="container-fluid py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="my5">
              <h3 className="mt-3 mb-3">Register</h3>
            </div>

            <div className="col-lg-7">
              <form action="" className="" onSubmit={handleRegister}>
                <input
                  type="text"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Surname"
                  name="surname"
                  value={inputs.surname || ""}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Firstname"
                  name="firstname"
                  value={inputs.firstname || ""}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Phone Number"
                  name="phone"
                  value={inputs.phone || ""}
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
                <input
                  type="password"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your password"
                  name="password"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                <input
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit"
                  value={isLoading ? "Please wait...": "Register"}
                  disabled={isLoading}
                />
              </form>
              <Link to="/login">already a user? Login</Link>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
