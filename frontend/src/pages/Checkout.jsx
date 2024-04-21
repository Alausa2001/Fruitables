import { ModalSearch } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { clearCart } from "../features/cart/cartSlice";

const Checkout = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const [isLoading, setIsLoading] = useState(false);
  const user = useAuthUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    country: "",
    company: "",
    postalCode: "",
    mobile: "",
    text: "",
    email: user.email,
    userId: user._id,
    total: total,
    cartItems,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post(
        `https://fruitables-7yyj.onrender.com/api/v1/checkout/${user._id}`,
        {
          formData,
        }
      )
      .then((res) => {
        const { status, authorization_url } = res.data;
        if (status === "ok") {
          dispatch(clearCart());
          navigate(authorization_url);
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          alert(err.response.data.message);
        } else {
          alert("Request unsuccessful, retry");
        }
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <ModalSearch />
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Checkout</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">Checkout</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <h1 className="mb-4">Billing details</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="row g-5">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        First Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        value={formData.firstname || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="form-item w-100">
                      <label className="form-label my-3">
                        Last Name<sup>*</sup>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        value={formData.lastname || ""}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Company Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    value={formData.company || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Address <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="House Number Street Name"
                    value={formData.address || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Town/City<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Country<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={formData.country || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Postcode/Zip<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    className="form-control"
                    value={formData.postalCode || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Mobile<sup>*</sup>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={formData.mobile || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <label className="form-label my-3">
                    Email Address<sup>*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-item">
                  <textarea
                    name="text"
                    className="form-control"
                    spellCheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Order Notes (Optional)"
                    value={formData.text || ""}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((product) => (
                        <tr key={product._id}>
                          <th scope="row">
                            <div className="d-flex align-items-center mt-2">
                              <img
                                src={product.imageUrl}
                                className="img-fluid rounded-circle"
                                style={{ width: "90px", height: "90px" }}
                                alt=""
                              />
                            </div>
                          </th>
                          <td className="py-5">{product.name}</td>
                          <td className="py-5">${product.price}</td>
                          <td className="py-5">{product.quantity}</td>
                          <td className="py-5">
                            ${Number(product.price) * Number(product.quantity)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Transfer-1"
                        name="Payment"
                        value="Transfer"
                      />
                      <label className="form-check-label" htmlFor="Transfer-1">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <p className="text-start text-dark">
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Payments-1"
                        name="Payment"
                        value="Payments"
                      />
                      <label className="form-check-label" htmlFor="Payments-1">
                        Check Payments
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Delivery-1"
                        name="Payment"
                        value="Delivery"
                      />
                      <label className="form-check-label" htmlFor="Delivery-1">
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        className="form-check-input bg-primary border-0"
                        id="Paypal-1"
                        name="Payment"
                        value="Paypal"
                      />
                      <label className="form-check-label" htmlFor="Paypal-1">
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                  <div className="col-12">
                    <div className="form-check text-start my-3">
                      <input
                        type="checkbox"
                        selected
                        className="form-check-input bg-primary border-0"
                        id="other-1"
                        name="Payment"
                        value="other"
                      />
                      <label className="form-check-label" htmlFor="other">
                        Others
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                  <input
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    value={isLoading ? "Processing..." : "Place Order"}
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
