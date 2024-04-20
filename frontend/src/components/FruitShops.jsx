import { Link } from "react-router-dom";
import { ProductCard } from "./Cards";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function FruitShops() {
  const { allProducts } = useSelector((state) => state.product);
  const [displayItem, setDisplayItem] = useState(allProducts);

  useEffect(() => {
    setDisplayItem(allProducts);
  }, [allProducts]);

  const handleFilter = (keyword) => {
    switch (keyword) {
      case "all":
        setDisplayItem(allProducts);
        break;
      case "simple":
        setDisplayItem(
          allProducts.filter((product) => product.category === "simple")
        );
        break;
      case "aggregate":
        setDisplayItem(
          allProducts.filter((product) => product.category === "aggregate")
        );
        break;
      case "multiple":
        setDisplayItem(
          allProducts.filter((product) => product.category === "multiple")
        );
        break;
      case "veg":
        setDisplayItem(
          allProducts.filter((product) => product.category === "vegetables")
        );
        break;
      default:
        setDisplayItem(allProducts);
    }
  };

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-className text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    onClick={() => handleFilter("all")}
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      All Products
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    onClick={() => handleFilter("veg")}
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Vegetables
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    onClick={() => handleFilter("simple")}
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits (Simple)
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    onClick={() => handleFilter("aggregate")}
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits (Aggregate)
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    onClick={() => handleFilter("multiple")}
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits (Multiple)
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {displayItem.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FruitShops;
