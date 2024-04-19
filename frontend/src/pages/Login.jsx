import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useDocumentTitle } from '../services/title';

const Login = () => {
  useDocumentTitle("Fruitables - Login")
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const signin = useSignIn()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios.post("https://fruitables-7yyj.onrender.com/api/v1/signin", {
        email: inputs.email,
        password: inputs.password
    }).then(res => {
        const { data, headers } = res;
        if (data.status === "ok") {
            if (signin({
                auth: {
                    token: headers.authorization,
                    type: 'Bearer'
                },
                userState: data.user
            })) {
                alert(`Welcome ${data.user.email}`);
                navigate("/")
            }
        }
    }).catch(err => {
        if (err.response.data) {
            alert(err.response.data.msg);
        } else {
            alert("Login unsuccessful, retry ")
        }
        navigate("/login");

    });
}

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          Login to Natural Fruit
        </h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active text-white">Login</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="p-5 bg-light rounded">
          <div className="row g-4">
            <div className="my5">
              <h3 className="mt-3 mb-3">Login</h3>
            </div>

            <div className="col-lg-7">
              <form action="" className="" onSubmit={handleLogin}>
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
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit" value="Login"
                />
              </form>
              <Link to="/forgot-password">Forget Password</Link>
            </div>
            <Link to="/register">Don't have account? Register</Link>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
