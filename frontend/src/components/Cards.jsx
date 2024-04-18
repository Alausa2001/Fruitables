import { Link } from "react-router-dom";

const style = {
  top: "10px",
  left: "10px",
};

export const FruitCard = ({ fruit }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img
            src={fruit.img}
            className="img-fluid w-100 rounded-top"
            alt=""
          ></img>
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={style}
        >
          {fruit.category}
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{fruit.name}</h4>
          <p>{fruit.info}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">
              `£${fruit.price} / kg`
            </p>
            <Link
              to={`/shop-detail/${fruit._id}`}
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-eye me-2 text-primary"></i> View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
