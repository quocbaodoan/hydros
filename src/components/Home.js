/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import brand from '../img/logo.png'
import waterbottle from '../img/water-bottle.svg'
import sprout from '../img/sprout.svg'
import photo1 from '../img/choice-img1.jpg'
import photo2 from '../img/photo-2.jpg'
import photo3 from '../img/choice-img2.jpg'
import photo4 from '../img/choice-img3.jpg'


export default function Home() {
    const [slideItems, setSlideItems] = useState(0);
    const nextSlides = () => {
        if (slideItems > 1) {
            setSlideItems(0)
        }
        else {
            setSlideItems(slideItems + 1)
        }
    }
    const prevSlides = () => {
        if (slideItems < 1) {
            setSlideItems(2)
        }
        else {
            setSlideItems(slideItems - 1)
        }
    }
    console.log(slideItems);
    return (
        <div>
            <div className="navbar">
                <div>
                    <div className="row">
                        <a href="#"><img className="logo" src={brand} /></a>
                        <ul className="main-nav">
                            <li className="landings">
                                <a href="#product">Product</a>
                            </li>
                            <li className="pages">
                                <a href="#about">About</a>
                            </li>
                            <li className="account">
                                <a href="#contact">Contact</a>
                            </li>
                            <li className="documentation">
                                <a href="#mission">Our Mission</a>
                            </li>
                        </ul>
                        <a href="/cart" className="btn btn-buy">Buy now</a>
                        <div className="mobile-nav">
                            <a href="#" onclick="openMobileNavDropdown()"><i className="fas fa-bars mobile-nav-icon"></i></a>
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
            <div className="welcome" id='product'>
                <div className="row">
                    <div className="col span-1-of-2">
                        <div className="row">
                            <h1><span style={{ color: '#335eea' }}>Hydros</span></h1>
                        </div>
                        <div className="row">
                            <h2>Smart water bottle</h2>
                        </div>
                        <div className="row">
                            <p>Thirsty? Hydros will send you glowing reminders<br />when you need to take a sip of water. <br /> It will help prevent dehydration.</p>
                        </div>
                        <div className="row welcome-btn-wrapper" style={{ marginTop: '3rem' }}>
                            <a href="/cart" className="btn btn-view-all">View products  <i className="fas fa-arrow-right"></i></a>
                            <a href="#" className="btn btn-documentation">Documentation</a>
                        </div>
                    </div>
                    <div className="col span-1-of-2 welcome-image">
                        <img style={{ maxWidth: '18rem' }} src={waterbottle} />
                    </div>
                </div>
            </div>
            <div className="feature">
                <div className="row">
                    <div className="col span-1-of-3">
                        <div className="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                        </div>
                        <div className="row">
                            <h3>Reach your perfect daily water intake</h3>
                        </div>
                        <div className="row">
                            <p>You're one of a kind. That is why you need a personal hydration plan. Let Hydros plan your water intake and become your hydration coach.</p>
                        </div>
                    </div>
                    <div className="col span-1-of-3">
                        <div className="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                        </div>
                        <div className="row">
                            <h3>Triple-walled, double insulation</h3>
                        </div>
                        <div className="row">
                            <p>Made of preminum-quality stainless steel, that will keep your drink cold or hot for many hours.</p>
                        </div>
                    </div>
                    <div className="col span-1-of-3">
                        <div className="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                        </div>
                        <div className="row">
                            <h3>Never wait again to be thirsty</h3>
                        </div>
                        <div className="row">
                            <p>As little as 2% loss of our bodies' water makes the brain lose alertness and our body to feel wellbeing. Try Hydros for yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="row about-2" id='about'>
                    <div className="col span-3-of-5">
                        <h2>Here are ways we're <span style={{ color: '#335eea' }}>making an impact.</span></h2>
                        <div className="row" style={{ paddingRight: "2rem", paddingTop: "1.5rem" }}>
                            <div className="col span-1-of-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z" fill="#335EEA"></path><path d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z" fill="#335EEA" opacity=".3"></path></g></svg>
                            </div>
                            <div className="col span-5-of-6">
                                <h4>Production</h4>
                                <p style={{ fontSize: '0.8rem' }}>We only choose premium-quality, planet-friendly materials to design our products.</p>
                            </div>
                        </div>
                        <div className="row" style={{ paddingRight: "2rem", paddingTop: "1rem" }}>
                            <div className="col span-1-of-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                            </div>
                            <div className="col span-5-of-6">
                                <h4>Education</h4>
                                <p style={{ fontSize: '0.8rem' }}>A big part of our marketing focuses on educating our audience about sustainable living and the importance of hydration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col span-2-of-5 img-3d">
                        <img className="about-img-2" src={sprout} />
                    </div>
                </div>
                <div className="row about-1" id='contact'>
                    <div className="col span-1-of-2">
                        <form className="about-form">
                            <img className="about-img-1" src={photo2} /><br />
                            <h5 style={{ textAlign: "left", width: "70%", marginLeft: "15%", color: "#869ab8", fontWeight: "400" }}>Phone</h5>
                            <input type="text" value="0969552064" id="name" name="name" oninvalid="invalidName(this)" oninput="invalidName(this)" disabled /><br />
                            <h5 style={{ textAlign: "left", width: "70%", marginLeft: "15%", color: "#869ab8", fontWeight: "400" }}>Email</h5>
                            <input type="email" value="hydros192830@gmail.com" id="email" name="email" oninvalid="invalidEmail(this)" oninput="invalidEmail(this)" disabled /><br />
                            <input type="submit" className="btn btn-submit" id="btn-submit" value="Contact Us" onsubmit="handleSubmit()" />
                        </form>
                    </div>
                    <div className="col span-1-of-2">
                        <h2>Don't think you're too small to create a real change.</h2>
                        <p>You are an active player in the world. And you can make our planet a better place without turning into an eco-militant! Start with simple steps and cultivate an attitude of conscious choices.</p>
                        <div className="row">
                            <div className="col span-1-of-2 about-check">
                                <p><i className="fas fa-check-circle"></i>Change the world</p>
                            </div>
                            <div className="col span-1-of-2 about-check">
                                <p><i className="fas fa-check-circle"></i>Wellbeing</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-2 about-check">
                                <p><i className="fas fa-check-circle"></i>Active cleanup</p>
                            </div>
                            <div className="col span-1-of-2 about-check">
                                <p><i className="fas fa-check-circle"></i>Raising awareness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row testimonials" id="mission">
                <h2 style={{ textAlign: 'center', color: '#335eea' }}>Did you know?</h2>
                <p style={{ textAlign: 'center' }}>One Hydros bottle typically replaces about 217 single-use plastic ones per year.</p>
                <div className="slider">
                    <div className={"slide-item " + (slideItems !== 0 ? 'nodisplay' : '')}>
                        <div className="row">
                            <div className="col span-1-of-2 slide-item-left">
                                <img src={photo1} />
                            </div>
                            <div className="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU FEEL GOOD...</p>
                                <h6>with proper hydration</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"slide-item " + (slideItems !== 1 ? 'nodisplay' : '')}>
                        <div className="row">
                            <div className="col span-1-of-2 slide-item-left">
                                <img src={photo3} />
                            </div>
                            <div className="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU LOOK GOOD...</p>
                                <h6>with beautifully crafted water bottles</h6>
                            </div>
                        </div>
                    </div>
                    <div className={"slide-item " + (slideItems !== 2 ? 'nodisplay' : '')}>
                        <div className="row">
                            <div className="col span-1-of-2 slide-item-left">
                                <img src={photo4} />
                            </div>
                            <div className="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU DO GOOD...</p>
                                <h6>by choosing nature-friendly products</h6>
                            </div>
                        </div>
                    </div>
                    <label className="next" onClick={nextSlides}><i className="fas fa-arrow-right"></i></label>
                    <label className="prev" onClick={prevSlides}><i className="fas fa-arrow-left"></i></label>
                </div>
            </div>
            <div className="shape-1">
                <div className="shape-bottom">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
                </div>
            </div>
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
        </div>
    )
}


