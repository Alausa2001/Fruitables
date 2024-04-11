const style = {
  top: "10px",
  left: "10px",
};

function FruitShops() {
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
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="/tab-1"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      All Products
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="/tab-2"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Vegetables
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="/tab-3"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-3.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Bananas</h4>
                          <p>
                            Contains a fair amaount of carbs, water, fiber, and
                            antioxidants but little protein and no fat
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-details2.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-details3.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/vegetable-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Vegetables
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Potatoes</h4>
                          <p>excellent sources of vitamin C and minerals.</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/vegetable-item-6.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Vegetables
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Mint</h4>
                          <p>
                            Helps with digestive health, reducing allergic
                            symptoms, good for cold symptoms
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/vegetable-item-4.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Vegetables
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Bell Pepper</h4>
                          <p>
                            Rich in antioxidants, and may help to protect
                            against certain chronic diseases
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/vegetable-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Vegetables
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Tomatoes</h4>
                          <p>excellent sources of vitamins and minerals</p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>
                            Boosts immune system, youragainst germs, helps
                            youragainst collagens.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-6.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Apples</h4>
                          <p>
                            A good source of nutrients, including fiber,Vitamin
                            C, and antioxidants which helps to support healthy
                            digestion
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £2.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Plenty nutrients that makes it a healthy choice, and
                            an excellent way to get Vitamin C
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/assets/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          ></img>
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={style}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            They are low in calories, but in high in fiber. May
                            protect against diabetes,cancer,obesity.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              £4.99 / kg
                            </p>
                            <a
                              href="shop-detail.html"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-eye me-2 text-primary"></i>{" "}
                              View Detail
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
