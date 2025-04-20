import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileMenu = () => {
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,

            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    const handleSubClick = (key) => {
        // Handle second-level menu toggle
        setSubIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <>
        <nav className="mean-nav">
            <ul>
                <li>
                    <Link to="#0">Home</Link>
                    <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
                        <li>
                            <Link className="arrow" to="/">Home Page 01</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-2">Home Page 02</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-2-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-3">Home Page 03</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-3-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-4">Home Page 04</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-4-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-5">Home Page 05</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-5-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-6">Home Page 06</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-6-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-7">Home Page 07</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-7-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-8">Home Page 08</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-8-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-9">Home Page 09</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-9-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-10">Home Page 10</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-10-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-11">Home Page 11</Link>
                            <ul className="sub-sub-menu">
                                <li><Link to="/index-11-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-12">Home Page 12</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-12-single">Single Layout</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link className="arrow" to="/index-13">Home Page 13</Link>
                            <ul className="sub-sub-menu new-badge">
                                <li><Link to="/index-13-single">Single Layout</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div>
                </li>

                <li>
                    <Link to="#0">Pages</Link>
                    <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-about">About Us</Link></li>
                        <li>
                            <Link to="#0">Project</Link>
                            <ul className={isSubActive.key === 1 ? "d-block" : "d-none"}>
                                <li><Link to="/page-projects">Project Grid</Link></li>
                                <li><Link to="/page-project-details">Project Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(1)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li>
                            <Link to="#0">Team</Link>
                            <ul className={isSubActive.key === 2 ? "d-block" : "d-none"}>
                                <li><Link to="/page-team">Team Grid</Link></li>
                                <li><Link to="/page-team-details">Team Details</Link></li>
                            </ul>
                            <div className={isSubActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(2)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-testimonial">Testimonials</Link></li>
                        <li><Link to="/page-faq">FAQ’s</Link></li>
                        <li><Link to="/page-pricing">Pricing Table</Link></li>
                        <li>
                            <Link to="#0">Shop</Link>
                            <ul className={isSubActive.key === 3 ? "d-block" : "d-none"}>
                                <li><Link to="/shop-products">Shop Product</Link></li>
                                <li><Link to="/shop-products-sidebar">Products Sidebar</Link></li>
                                <li><Link to="/shop-product-details">Product Details</Link></li>
                                <li><Link to="/shop-checkout">Checkout</Link></li>
                                <li><Link to="/shop-cart">Cart</Link></li>
                            </ul>
                            <div className={isSubActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(3)}><i className="fa fa-angle-down" /></div>
                        </li>
                        <li><Link to="/page-404">404 Error</Link></li>
                    </ul>
                    <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div>
                </li>

                <li>
                    <Link to="#0">Services</Link>
                    <ul className={isActive.key === 3 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-services">Service Grid</Link></li>
                        <li><Link to="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div>
                </li>

                <li>
                    <Link to="page-portfolio">Portfolio</Link>
                    <ul className={isActive.key === 4 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/page-portfolio">Portfolio</Link></li>
                        <li><Link to="/page-portfolio-details">Portfolio Details</Link></li>
                    </ul>
                    <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div>
                </li>

                <li>
                    <Link to="#0">Blog</Link>
                    <ul className={isActive.key === 5 ? "sub-menu d-block" : "d-none"}>
                        <li><Link to="/news-grid">Blog Grid</Link></li>
                        <li><Link to="/news-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div>
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        </>
    );
};

export default MobileMenu;