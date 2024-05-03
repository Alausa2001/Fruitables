import { Link } from "react-router-dom";

function BackToTop() {
  return (
    <Link
      onClick={() => (window.scrollTo(0, 0))}
      className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
    >
      <i className="fa fa-arrow-up"></i>
    </Link>
  );
}

export default BackToTop;
