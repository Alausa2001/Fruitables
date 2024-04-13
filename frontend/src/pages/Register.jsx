import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      password: inputs.password,
      email: inputs.email,
    };

    await axios
      .post("https://fruitables-7yyj.onrender.com/api/v1/signup", data)
      .then((res) => {
        if (res.status === "success") {
          console.log(res);
          alert(res.message);
          navigate("/login");
          return;
        }
        console.log(res);
        alert(res.message);
        navigate("/register");
      })
      .catch((err) => {
        console.log(err);
        navigate("/register");
      });
  };

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Welcome Back</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active text-white">Register</li>
        </ol>
      </div>

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
                <button
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit"
                >
                  Register
                </button>
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
