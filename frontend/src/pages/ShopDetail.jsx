import { Link, useNavigate, useParams } from "react-router-dom";
import { ModalSearch, Spinner } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart } from "../features/cart/cartSlice";
import { useDocumentTitle } from "../services/title";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import axios from "axios";

const ShopDetail = () => {
  useDocumentTitle("Fruitables - Shop Detail");
  const { id } = useParams();
  const { allProducts } = useSelector((state) => state.product);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [buttonDisable, setButtonDisable] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const found = allProducts.find((item) => item._id === id);
    if (!found) {
      navigate("/notfound");
      return;
    }
    setProduct(found);
    const getReviews = async () => {
      await axios
        .get(`https://fruitables-7yyj.onrender.com/api/v1/fruits/${found._id}/reviews`)
        .then((res) => {
          setReviews(res.data.reviews);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          navigate("/notfound");
        });
    };

    getReviews();
  }, [id, allProducts, navigate]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post(`/api/v1/fruits/${id}/review`, {
        name: inputs.name,
        review: inputs.review,
        rating: 4,
      })
      .then((res) => {
        setIsLoading(false);
        alert("Review Added");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        navigate("/notfound");
      });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ModalSearch />
          <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Shop Detail</h1>
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white">Shops</li>
            </ol>
          </div>
          <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
              <div className="row g-4 mb-5">
                <div className="col-lg-8 col-xl-9">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="border rounded">
                        <Link to="#">
                          <img
                            src={product.imageUrl}
                            className="img-fluid rounded"
                            alt="FruiteImage"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="fw-bold mb-3">{product.name}</h4>
                      <p className="mb-3">
                        Category:{" "}
                        {product.category === "vegetables"
                          ? "Vegetable"
                          : `Fruit (${product.category})`}
                      </p>
                      <h5 className="fw-bold mb-3">${product.price}</h5>
                      <div className="d-flex mb-4">
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star text-secondary"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="mb-4">{product.description}</p>
                      <div
                        className="input-group quantity mb-5"
                        style={{ width: "100px" }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-minus rounded-circle bg-light border"
                            onClick={() => {
                              if (quantity > 1) {
                                setQuantity(quantity - 1);
                              }
                            }}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm text-center border-0"
                          value={quantity}
                          readOnly
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-plus rounded-circle bg-light border"
                            onClick={() => {
                              if (quantity < product.quantityAvailable) {
                                setQuantity(quantity + 1);
                              }
                            }}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (isAuthenticated) {
                            setButtonDisable(true);
                            dispatch(addToCart({ ...product, quantity }));
                            alert("Item added to cart");
                            return;
                          }
                          alert("Authentication is required");
                          navigate("/login");
                          return;
                        }}
                        className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                        disabled={buttonDisable}
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <nav>
                        <div className="nav nav-tabs mb-3">
                          <button
                            className="nav-link active border-white border-bottom-0"
                            type="button"
                            role="tab"
                            id="nav-about-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-about"
                            aria-controls="nav-about"
                            aria-selected="true"
                          >
                            Description
                          </button>
                          <button
                            className="nav-link border-white border-bottom-0"
                            type="button"
                            role="tab"
                            id="nav-mission-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-mission"
                            aria-controls="nav-mission"
                            aria-selected="false"
                          >
                            Reviews
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content mb-5">
                        <div
                          className="tab-pane active"
                          id="nav-about"
                          role="tabpanel"
                          aria-labelledby="nav-about-tab"
                        >
                          <p>{product.description}</p>

                          <div className="px-2">
                            <div className="row g-4">
                              <div className="col-6">
                                <div className="row bg-light align-items-center text-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Weight</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">{product.weight} kg</p>
                                  </div>
                                </div>
                                <div className="row text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Country of Origin</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">{product.origin}</p>
                                  </div>
                                </div>
                                <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Quality</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">{product.quality}</p>
                                  </div>
                                </div>
                                <div className="row text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Сheck</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">{product.check}</p>
                                  </div>
                                </div>
                                <div className="row bg-light text-center align-items-center justify-content-center py-2">
                                  <div className="col-6">
                                    <p className="mb-0">Min Weight</p>
                                  </div>
                                  <div className="col-6">
                                    <p className="mb-0">
                                      {product.minWeight} Kg
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane"
                          id="nav-mission"
                          role="tabpanel"
                          aria-labelledby="nav-mission-tab"
                        >
                          {reviews &&
                            reviews.map((item) => (
                              <div key={item._id} className="d-flex">
                                <img
                                  src="/assets/avatar.jpg"
                                  className="img-fluid rounded-circle p-3"
                                  style={{ width: "100px", height: "100px" }}
                                  alt=""
                                />
                                <div className="">
                                  <p
                                    className="mb-2"
                                    style={{ fontSize: "14px" }}
                                  >
                                    April 12, 2024
                                  </p>
                                  <div className="d-flex justify-content-between">
                                    <h5>{item.name}</h5>
                                    <div className="d-flex mb-3">
                                      <i className="fa fa-star text-secondary"></i>
                                      <i className="fa fa-star text-secondary"></i>
                                      <i className="fa fa-star text-secondary"></i>
                                      <i className="fa fa-star text-secondary"></i>
                                      <i className="fa fa-star"></i>
                                    </div>
                                  </div>
                                  <p>{item.review}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                        <div
                          className="tab-pane"
                          id="nav-vision"
                          role="tabpanel"
                        >
                          <p className="text-dark">
                            Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum et tempor sit. Aliqu diam amet diam et eos
                            labore. 3
                          </p>
                          <p className="mb-0">
                            Diam dolor diam ipsum et tempor sit. Aliqu diam amet
                            diam et eos labore. Clita erat ipsum et lorem et sit
                          </p>
                        </div>
                      </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                      <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="border-bottom rounded">
                            <input
                              type="text"
                              name="name"
                              className="form-control border-0 me-4"
                              placeholder="Your Name *"
                              value={inputs.name || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="border-bottom rounded">
                            <input
                              type="email"
                              name="email"
                              className="form-control border-0"
                              placeholder="Your Email *"
                              value={inputs.email || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="border-bottom rounded my-4">
                            <textarea
                              name="review"
                              id=""
                              className="form-control border-0"
                              cols="30"
                              rows="8"
                              placeholder="Your Review *"
                              spellCheck="false"
                              value={inputs.review || ""}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between py-3 mb-5">
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-3">Please rate:</p>
                              <div
                                className="d-flex align-items-center"
                                style={{ fontSize: "12px" }}
                              >
                                <i className="fa fa-star text-muted"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                              </div>
                            </div>
                            <input
                              type="submit"
                              className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                              value="Post Comment"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="row g-4 fruite">
                    <div className="col-lg-12">
                      <div className="input-group w-100 mx-auto d-flex mb-4">
                        <input
                          type="search"
                          className="form-control p-3"
                          placeholder="keywords"
                          aria-describedby="search-icon-1"
                        />
                        <span
                          id="search-icon-1"
                          className="input-group-text p-3"
                        >
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                      <div className="mb-4">
                        <h4>Categories</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShopDetail;
