import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ModalSearch = () => {

  const [searchInput, setSearchInput] = useState("");
  const { allProducts } = useSelector(state => state.product);
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (searchInput.length > 0) {
      const found = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase()) || product.category.toLowerCase().includes(searchInput.toLowerCase()) || product.description.toLowerCase().includes(searchInput.toLowerCase())
      })
      setProducts(found);
    }
  };


  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen" style={{background: 'white', opacity: '.8', height: '100%'}}>
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Search by keyword
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modald-flex align-items-center">
            <div className="input-group w-75 mx-auto d-flex">
              <input
                type="search"
                className="form-control p-3"
                placeholder="keywords"
                aria-describedby="search-icon-1"
                onChange={handleChange}
              />
              <span id="search-icon-1" className="input-group-text p-3">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-9" style={{height: '100%'}}>
              <div className="row g-4 justify-content-center" style={{height: '100%'}}>
                {products.map((product) => (
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
  );
};

export default ModalSearch;
