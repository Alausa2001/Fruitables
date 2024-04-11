import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="container-fluid copyright bg-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-light">
              <Link to={"/"}>
                <i className="fas fa-copyright text-light me-2"></i>eAssign
              </Link>
              , All right reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Copyright;
