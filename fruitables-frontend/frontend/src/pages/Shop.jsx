import { ModalSearch } from "../components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDocumentTitle } from '../services/title';

const Shop = () => {
  useDocumentTitle("Fruitables - Shop")
  const { allProducts } = useSelector((state) => state.product);
  const [displayItem, setDisplayItem] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <>
      <ModalSearch />
      <>
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active text-white">Shop</li>
          </ol>
        </div>

        <div className="container-fluid fruite py-5">
          <div className="container py-5">
            <h1 className="mb-4">Fresh fruits shop</h1>
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-xl-3">
                    {/* <!-- <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1">
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div> --> */}
                  </div>
                  <div className="col-6"></div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="row g-4">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <h4>Categories</h4>
                          <ul className="list-unstyled fruite-categorie">
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <Link onClick={() => handleFilter("simple")}>
                                  <i className="fas fa-apple-alt me-2"></i>
                                  SIMPLE FRUITS
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <Link onClick={() => handleFilter("aggregate")}>
                                  <i className="fas fa-apple-alt me-2"></i>
                                  AGGREGATE FRUITS
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <Link onClick={() => handleFilter("veg")}>
                                  <i className="fas fa-apple-alt me-2"></i>
                                  VEGETABLES
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="d-flex justify-content-between fruite-name">
                                <Link onClick={() => handleFilter("multiple")}>
                                  <i className="fas fa-apple-alt me-2"></i>
                                  MULTIPLE FRUITS
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- <div className="col-lg-12">
                                        <div className="mb-3">
                                            <h4 className="mb-2">Price</h4>
                                            <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" value="0" oninput="amount.value=rangeInput.value">
                                            <output id="amount" name="amount" min-velue="0" max-value="500" for="rangeInput">0</output>
                                        </div>
                                    </div> --> */}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row g-4 justify-content-center">
                      {displayItem.map((product) => (
                        <div key={product._id} className="col-md-6 col-lg-6 col-xl-4">
                          <div className="rounded position-relative fruite-item">
                            <div className="fruite-img">
                              <img
                                src={product.imageUrl}
                                className="img-fluid w-100 rounded-top"
                                alt=""
                              />
                            </div>
                            <div
                              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                              style={{ top: "10px", left: "10px" }}
                            >
                              {product.category}
                            </div>

                            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>{product.name}</h4>
                              <p>{product.description}</p>
                              <div className="d-flex justify-content-between flex-lg-wrap">
                                <p className="text-dark fs-5 fw-bold mb-0">
                                  ${product.price} / kg
                                </p>
                                <Link
                                  to={`/product/${product._id}`}
                                  className="btn border border-secondary rounded-pill px-3 text-primary"
                                >
                                  <i className="fa fa-eye me-2 text-primary"></i>{" "}
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Shop;
