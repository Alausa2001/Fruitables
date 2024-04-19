import { ModalSearch } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <>
        <ModalSearch />
        <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Checkout</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                <li className="breadcrumb-item active text-white">Checkout</li>
            </ol>
        </div>

        <div className="container-fluid py-5">
            <div className="container py-5">
                <h1 className="mb-4">Billing details</h1>
                <form action="#">
                    <div className="row g-5">
                        <div className="col-md-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">First Name<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                    <div className="form-item w-100">
                                        <label className="form-label my-3">Last Name<sup>*</sup></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Company Name<sup>*</sup></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Address <sup>*</sup></label>
                                <input type="text" className="form-control" placeholder="House Number Street Name" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Town/City<sup>*</sup></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Country<sup>*</sup></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Postcode/Zip<sup>*</sup></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Mobile<sup>*</sup></label>
                                <input type="tel" className="form-control" />
                            </div>
                            <div className="form-item">
                                <label className="form-label my-3">Email Address<sup>*</sup></label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-check my-3">
                                <input type="checkbox" className="form-check-input" id="Account-1" name="Accounts" value="Accounts" />
                                <label className="form-check-label" for="Account-1">Create an account?</label>
                            </div>
                            <hr/>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" id="Address-1" name="Address" value="Address" />
                                <label className="form-check-label" for="Address-1">Ship to a different address?</label>
                            </div>
                            <div className="form-item">
                                <textarea name="text" className="form-control" spellcheck="false" cols="30" rows="11" placeholder="Oreder Notes (Optional)"></textarea>
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
                                        {cartItems.map(product => 
                                        <tr key={product._id}>
                                            <th scope="row">
                                                <div className="d-flex align-items-center mt-2">
                                                    <img src={product.imageUrl} className="img-fluid rounded-circle" style={{width: "90px", height: "90px"}} alt="" />
                                                </div>
                                            </th>
                                            <td className="py-5">{product.name}</td>
                                            <td className="py-5">${product.price}</td>
                                            <td className="py-5">{product.quantity}</td>
                                            <td className="py-5">${Number(product.price) * Number(product.quantity)}</td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" value="Transfer" />
                                        <label className="form-check-label" for="Transfer-1">Direct Bank Transfer</label>
                                    </div>
                                    <p className="text-start text-dark">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Payments-1" name="Payments" value="Payments" />
                                        <label className="form-check-label" for="Payments-1">Check Payments</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" value="Delivery" />
                                        <label className="form-check-label" for="Delivery-1">Cash On Delivery</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
                                <div className="col-12">
                                    <div className="form-check text-start my-3">
                                        <input type="checkbox" className="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" value="Paypal" />
                                        <label className="form-check-label" for="Paypal-1">Paypal</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                                <Link to="/pay" className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place Order</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Checkout;