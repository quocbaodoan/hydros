/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import brand from '../img/logo.png'
import CartContent from './CartContent'

const Cart = () => {
    return (
        <>
            <div className="navbar">
                <div>
                    <div className="row">
                        <a href="/"><img className="logo" src={brand} /></a>
                        <ul className="main-nav">
                            <li className="landings">
                                <a href="/#product">Product</a>
                            </li>
                            <li className="pages">
                                <a href="/#about">About</a>
                            </li>
                            <li className="account">
                                <a href="/#contact">Contact</a>
                            </li>
                            <li className="documentation">
                                <a href="/#mission">Our Mission</a>
                            </li>
                        </ul>
                        <a href="/cart" className="btn btn-buy">Buy now</a>
                        <div className="mobile-nav">
                            <a href="/" onclick="openMobileNavDropdown()"><i className="fas fa-bars mobile-nav-icon"></i></a>
                            <div className="mobile-nav-dropdown" id="mobile-nav-dropdown">
                                <a href="#" onclick="closeMobileNavDropdown()"><i className="fas fa-times close-mobile-nav-icon"></i></a>
                                <div className="landings-mobile-nav">
                                    <div className="row">
                                        <h5>Landings</h5>
                                    </div>
                                </div>
                                <div className="mobile-nav-border"></div>
                                <div className="pages-mobile-nav">
                                    <div className="row">
                                        <h5>Pages</h5>
                                    </div>
                                </div>
                                <div className="mobile-nav-border"></div>
                                <div className="row account-mobile-nav">
                                    <h5 style={{ marginBottom: '1rem' }}>Account</h5>
                                </div>
                                <div className="mobile-nav-border"></div>
                                <div className="row documentation-mobile-nav">
                                    <h5 style={{ marginBottom: '1rem' }}>Documentation</h5>
                                </div>
                                <div className="mobile-btn">
                                    Buy now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartContent/>
            <footer>
                <div className="row">
                    <div className="col span-1-of-5">
                        <img />
                        <p>A better way to build.</p>
                        <div className="row">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className="col span-4-of-5">
                        <div className="row">
                            <div className="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>PRODUCTS</h6>
                                <a href="#">Page Builder</a>
                                <a href="#">UI Kit</a>
                                <a href="#">Styleguide</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                            </div>
                            <div className="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>SERVICES</h6>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Pagebuilder</a>
                                <a href="#">UI Kit</a>
                            </div>
                            <div className="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>CONNECT</h6>
                                <a href="#">Page Builders</a>
                                <a href="#">UI Kit</a>
                                <a href="#">Styleguide</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                            </div>
                            <div className="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>LEGAL</h6>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Pagebuilder</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        
        </>
    )
}

export default Cart
