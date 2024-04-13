import { Link } from "react-router-dom";

function BackToTop() {
  return (
    <Link
      to="/"
      className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
    >
      <i className="fa fa-arrow-up"></i>
    </Link>
  );
}

export default BackToTop;
