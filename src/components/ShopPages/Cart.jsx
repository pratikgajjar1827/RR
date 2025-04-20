import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeThree/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import PageTitle from '../PageTitle.jsx'

// Importing images
import Product1 from '../../assets/images/resource/products/1.jpg';
import Product2 from '../../assets/images/resource/products/2.jpg';
import Product3 from '../../assets/images/resource/products/3.jpg';

function Cart() {
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1,
  });

  const handleQuantityChange = (item, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[item] + change;
      return {
        ...prevQuantities,
        [item]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const subtotal = (36 * quantities.item1) + (115 * quantities.item2) + (68 * quantities.item3);
  const shipping = 70;
  const total = subtotal + shipping;

  // Cart Form Code Start //
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };
  const handleUpdateTotals = () => {
    // Handle update totals logic here
    console.log("Country:", country);
    console.log("State:", state);
    console.log("Postcode:", postcode);
  };
  // Cart Form Code End //

  return (

    <>
      <Header />
      <PageTitle
        title="Cart"
        breadcrumb={[
          { link: '/', title: 'Home' },
          { link: '/cart', title: 'Cart' },
        ]}
      />
      <section>
        <div className="container-lg pt-100 pb-100">
          <div className="team-five__wrp">
            <div className="section-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered tbl-shopping-cart">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Photo</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="cart_item">
                          <td className="product-remove">
                            <Link title="Remove this item" className="remove" to="#">×</Link>
                          </td>
                          <td className="product-thumbnail">
                            <Link to="#"><img alt="product" src={Product1} /></Link>
                          </td>
                          <td className="product-name">
                            <Link to="/product-details">Delivery paper box</Link>
                            <ul className="variation">
                              <li className="variation-size">Size: <span>Medium</span></li>
                            </ul>
                          </td>
                          <td className="product-price"><span className="amount">$36.00</span></td>
                          <td className="product-quantity">
                            <div className="product-details__quantity">
                              <div className="quantity-box">
                                <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input type="number" id="1" defaultValue={quantities.item1} readOnly />
                                <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal"><span className="amount">${(36 * quantities.item1).toFixed(2)}</span></td>
                        </tr>
                        <tr className="cart_item">
                          <td className="product-remove">
                            <Link title="Remove this item" className="remove" to="#">×</Link>
                          </td>
                          <td className="product-thumbnail">
                            <Link to="#"><img alt="product" src={Product2} /></Link>
                          </td>
                          <td className="product-name">
                            <Link to="/product-details">Set paper box</Link>
                            <ul className="variation">
                              <li className="variation-size">Size: <span>Small</span></li>
                            </ul>
                          </td>
                          <td className="product-price"><span className="amount">$115.00</span></td>
                          <td className="product-quantity">
                            <div className="product-details__quantity">
                              <div className="quantity-box">
                                <button type="button" className="sub" onClick={() => handleQuantityChange('item2', -1)}>
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input type="number" id="1" defaultValue={quantities.item2} readOnly />
                                <button type="button" className="add" onClick={() => handleQuantityChange('item2', 1)}>
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal"><span className="amount">${(115 * quantities.item2).toFixed(2)}</span></td>
                        </tr>
                        <tr className="cart_item">
                          <td className="product-remove">
                            <Link title="Remove this item" className="remove" to="#">×</Link>
                          </td>
                          <td className="product-thumbnail">
                            <Link to="#"><img alt="product" src={Product3} /></Link>
                          </td>
                          <td className="product-name">
                            <Link to="/product-details">Set paper box</Link>
                            <ul className="variation">
                              <li className="variation-size">Size: <span>Large</span></li>
                            </ul>
                          </td>
                          <td className="product-price"><span className="amount">$68.00</span></td>
                          <td className="product-quantity">
                            <div className="product-details__quantity">
                              <div className="quantity-box">
                                <button type="button" className="sub" onClick={() => handleQuantityChange('item3', -1)}>
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input type="number" id="1" defaultValue={quantities.item3} readOnly />
                                <button type="button" className="add" onClick={() => handleQuantityChange('item3', 1)}>
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal"><span className="amount">${(68 * quantities.item3).toFixed(2)}</span></td>
                        </tr>
                        <tr className="cart_item">
                          <td colSpan="3">
                            <form className="row g-3 coupon-form">
                              <div className="col-auto">
                                <input type="text" name="coupon_code" className="input-text form-control mr-1" id="coupon_code" defaultValue="" placeholder="Coupon code" />
                              </div>
                              <div className="col-auto">
                              <button type="submit" className="apply-button" name="apply_coupon" value="Apply Coupon">ApplyCoupon</button>
                              </div>
                            </form>
                          </td>
                          <td colSpan="2">&nbsp;</td>
                          <td>
                            <button type="button" className="theme-btn btn-style-one">
                              <span className="btn-title">Update Cart</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-md-12 mt-30">
                  <div className="row">
                    <div className="col-md-5">
                      <h4>Calculate Shipping</h4>
                      <form className="form">
                        <div className="mb-10">
                          <select className="form-control" defaultValue={country} onChange={handleCountryChange} >
                            <option defaultValue="">Select Country</option>
                            <option defaultValue="Australia">Australia</option>
                            <option defaultValue="UK">UK</option>
                            <option defaultValue="USA">USA</option>
                          </select>
                        </div>
                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="State/country"/>
                        </div>
                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="Postcod/zip"/>
                        </div>
                        <div className="my-3">
                            <button type="button" className="theme-btn btn-two">Update Totals</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                      <h4>Cart Totals</h4>
                      <table className="table table-bordered cart-total">
                        <tbody>
                          <tr>
                            <td>Cart Subtotal</td>
                            <td>${subtotal.toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Shipping and Handling</td>
                            <td>${shipping.toFixed(2)}</td>
                          </tr>
                          <tr className="order-total">
                            <td>Total</td>
                            <td>${total.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                      <Link className="theme-btn btn-two" to="/shop-checkout">Proceed to Checkout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
      <Footer />
    </>
  );
}

export default Cart;
