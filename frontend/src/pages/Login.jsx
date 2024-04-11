const Login = () => {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">
          Login to Natural Fruit
        </h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
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
              <form action="" className="">
                <input
                  type="email"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  className="w-100 form-control border-0 py-3 mb-4"
                  placeholder="Enter Your password"
                />
                <button
                  className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                  type="submit"
                >
                  Login
                </button>
              </form>
              <a href="/forgot-password">Forget Password</a>
            </div>
            <a href="/register">Don't have account? Register</a>

            <div className="col-lg-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
