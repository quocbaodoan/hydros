import './App.css';
import './css/grid.css'
import './css/queries.css'
import './css/style.css'
import brand from './img/logo.png'
import dashkit from './img/dashkit.jpg'
import waterbottle from './img/water-bottle.svg'
import sprout from './img/sprout.svg'
import illustration1 from './img/illustration-2.png'
import illustration2 from './img/illustration-8.png'
import photo1 from './img/choice-img1.jpg'
import photo2 from './img/photo-2.jpg'
import photo3 from './img/choice-img2.jpg'
import photo4 from './img/choice-img3.jpg'

function App() {
    return (
        <div className="App">
            <div class="navbar">
                <div>
                    <div class="row">
                        <a href="#"><img class="logo" src={brand} /></a>
                        <ul class="main-nav">
                            <li class="landings">
                                <a href="#product">Product</a>
                            </li>
                            <li class="pages">
                                <a href="#about">About</a>
                            </li>
                            <li class="account">
                                <a href="#contact">Contact</a>
                            </li>
                            <li class="documentation">
                                <a href="#mission">Our Mission</a>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-buy">Buy now</a>
                        <div class="mobile-nav">
                            <a href="#" onclick="openMobileNavDropdown()"><i class="fas fa-bars mobile-nav-icon"></i></a>
                            <div class="mobile-nav-dropdown" id="mobile-nav-dropdown">
                                <a href="#" onclick="closeMobileNavDropdown()"><i class="fas fa-times close-mobile-nav-icon"></i></a>
                                <div class="landings-mobile-nav">
                                    <div class="row">
                                        <h5>Landings</h5>
                                    </div>
                                    <div class="row">
                                        <div class="col span-1-of-2">
                                            <h6>SERVICES</h6>
                                            <a href="#">Coworking</a>
                                            <a href="#">Rental</a>
                                            <a href="#">Job Listing</a>
                                            <h6 style={{ marginTop: '1rem' }}>APPS</h6>
                                            <a href="#">Desktop</a>
                                            <a href="#">Mobile</a>
                                        </div>
                                        <div class="col span-1-of-2">
                                            <h6>WEB</h6>
                                            <a href="#">Basic</a>
                                            <a href="#">Startup</a>
                                            <a href="#">Enterprise</a>
                                            <a href="#">Service</a>
                                            <a href="#">Cloud Hosting</a>
                                            <a href="#">Agency</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-nav-border"></div>
                                <div class="pages-mobile-nav">
                                    <div class="row">
                                        <h5>Pages</h5>
                                    </div>
                                    <div class="row">
                                        <div class="col span-1-of-2">
                                            <h6>CARRER</h6>
                                            <a href="#">Listing</a>
                                            <a href="#">Opening</a>
                                            <h6 style={{ marginTop: '1rem' }}>COMPANY</h6>
                                            <a href="#">About</a>
                                            <a href="#">Pricing</a>
                                            <a href="#">Terms</a>
                                            <h6 style={{ marginTop: '1rem' }}>HELP CENTER</h6>
                                            <a href="#">Overview</a>
                                            <a href="#">Article</a>
                                            <h6 style={{ marginTop: '1rem' }}>CONTACT</h6>
                                            <a href="#">Basic</a>
                                            <a href="#">Cover</a>
                                        </div>
                                        <div class="col span-1-of-2">
                                            <h6>BLOG</h6>
                                            <a href="#">Richview</a>
                                            <a href="#">Article</a>
                                            <a href="#">Showcase</a>
                                            <a href="#">Search</a>
                                            <h6 style={{ marginTop: '1rem' }}>PORTFOLIO</h6>
                                            <a href="#">Masonry</a>
                                            <a href="#">Grid Rows</a>
                                            <a href="#">Parallax</a>
                                            <a href="#">Case Study</a>
                                            <a href="#">Sidebar</a>
                                            <a href="#">Sidebar: Fluid</a>
                                            <a href="#">Basic Grid</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mobile-nav-border"></div>
                                <div class="row account-mobile-nav">
                                    <h5 style={{ marginBottom: '1rem' }}>Account</h5>
                                    <ul>
                                        <li class="settings-mobile">
                                            <a href="#settings-content-mobile" class="settings-header-mobile">Settings<span class=""><i class="fas fa-angle-down"></i></span></a>
                                            <div class="dropdown-mobile settings-content-mobile" id="settings-content-mobile">
                                                <a href="#">General</a>
                                                <a href="#">Security</a>
                                                <a href="#">Notifications</a>
                                                <a href="#">Plans & Payment</a>
                                                <a href="#">Users</a>
                                            </div>
                                        </li>
                                        <li class="sign-in-mobile">
                                            <a href="#sign-in-content-mobile" class="sign-in-header-mobile">Sign In<span><i class="fas fa-angle-down"></i></span></a>
                                            <div class="dropdown-mobile sign-in-content-mobile" id="sign-in-content-mobile">
                                                <a href="#">Side Cover</a>
                                                <a href="#">Illustration</a>
                                                <a href="#">Basic</a>
                                                <a href="#">Model Horizontal</a>
                                                <a href="#">Model Vertical</a>
                                            </div>
                                        </li>
                                        <li class="sign-up-mobile">
                                            <a href="#sign-up-content-mobile" class="sign-up-header-mobile">Sign Up<span><i class="fas fa-angle-down"></i></span></a>
                                            <div class="dropdown-mobile sign-up-content-mobile" id="sign-up-content-mobile dropdown-mobile">
                                                <a href="#">Side Cover</a>
                                                <a href="#">Illustration</a>
                                                <a href="#">Basic</a>
                                                <a href="#">Model Horizontal</a>
                                                <a href="#">Model Vertical</a>
                                            </div>
                                        </li>
                                        <li class="password-reset-mobile">
                                            <a href="#password-reset-content-mobile" class="password-reset-header-mobile">Password Reset<span><i class="fas fa-angle-down"></i></span></a>
                                            <div class="dropdown-mobile password-reset-content-mobile" id="password-reset-content-mobile dropdown-mobile">
                                                <a href="#">Side Cover</a>
                                                <a href="#">Illustration</a>
                                                <a href="#">Basic</a>
                                            </div>
                                        </li>
                                        <li class="error-mobile">
                                            <a href="#error-content-mobile" class="error-header-mobile">Error<span><i class="fas fa-angle-down"></i></span></a>
                                            <div class="dropdown-mobile error-content-mobile" id="error-content-mobile dropdown-mobile">
                                                <a href="#">Side Cover</a>
                                                <a href="#">Illustration</a>
                                                <a href="#">Basic</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-nav-border"></div>
                                <div class="row documentation-mobile-nav">
                                    <h5 style={{ marginBottom: '1rem' }}>Documentation</h5>
                                    <div class="row">
                                        <a href="#" style={{ display: 'flex' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z" fill="#335EEA" opacity=".3"></path><path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" x="7" y="10" width="5" height="2" rx="1"></rect><rect fill="#335EEA" opacity=".3" x="7" y="14" width="9" height="2" rx="1"></rect></g></svg>
                                            <div class="col">
                                                <h6>DOCUMENTATION</h6>
                                                <p>Customizing and building</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="mobile-nav-border"></div>
                                    <div class="row">
                                        <a href="#" style={{ display: 'flex' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect fill="#335EEA" x="4" y="4" width="7" height="7" rx="1.5"></rect><path d="M5.5 13h4a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-4A1.5 1.5 0 015.5 13zm9-9h4A1.5 1.5 0 0120 5.5v4a1.5 1.5 0 01-1.5 1.5h-4A1.5 1.5 0 0113 9.5v-4A1.5 1.5 0 0114.5 4zm0 9h4a1.5 1.5 0 011.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 011.5-1.5z" fill="#335EEA" opacity=".3"></path></g></svg>
                                            <div class="col">
                                                <h6>COMPONENTS</h6>
                                                <p>Full list of components</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="mobile-nav-border"></div>
                                    <div class="row">
                                        <a href="#" style={{ display: 'flex' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z" fill="#335EEA" opacity=".3"></path><rect fill="#335EEA" x="6" y="11" width="9" height="2" rx="1"></rect><rect fill="#335EEA" x="6" y="15" width="5" height="2" rx="1"></rect></g></svg>
                                            <div class="col">
                                                <h6>CHANGELOG</h6>
                                                <p>Keep track of changes</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="mobile-btn">
                                    Buy now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="welcome" id='product'>
                <div class="row">
                    <div class="col span-1-of-2">
                        <div class="row">
                            <h1><span style={{ color: '#335eea' }}>Hydros</span></h1>
                        </div>
                        <div class="row">
                            <h2>Smart water bottle</h2>
                        </div>
                        <div class="row">
                            <p>Thirsty? Hydros will send you glowing reminders<br />when you need to take a sip of water. <br /> It will help prevent dehydration.</p>
                        </div>
                        <div class="row welcome-btn-wrapper" style={{ marginTop: '3rem' }}>
                            <a href="#" class="btn btn-view-all">View products  <i class="fas fa-arrow-right"></i></a>
                            <a href="#" class="btn btn-documentation">Documentation</a>
                        </div>
                    </div>
                    <div class="col span-1-of-2 welcome-image">
                        <img style={{ maxWidth: '18rem' }} src={waterbottle} />
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="row">
                    <div class="col span-1-of-3">
                        <div class="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA"></path><path d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                        </div>
                        <div class="row">
                            <h3>Reach your perfect daily water intake</h3>
                        </div>
                        <div class="row">
                            <p>You're one of a kind. That is why you need a personal hydration plan. Let Hydros plan your water intake and become your hydration coach.</p>
                        </div>
                    </div>
                    <div class="col span-1-of-3">
                        <div class="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA"></path><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3"></path></g></svg>
                        </div>
                        <div class="row">
                            <h3>Triple-walled, double insulation</h3>
                        </div>
                        <div class="row">
                            <p>Made of preminum-quality stainless steel, that will keep your drink cold or hot for many hours.</p>
                        </div>
                    </div>
                    <div class="col span-1-of-3">
                        <div class="row">
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                        </div>
                        <div class="row">
                            <h3>Never wait again to be thirsty</h3>
                        </div>
                        <div class="row">
                            <p>As little as 2% loss of our bodies' water makes the brain lose alertness and our body to feel wellbeing. Try Hydros for yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="row about-2" id='about'>
                    <div class="col span-3-of-5">
                        <h2>Here are ways we're <span style={{ color: '#335eea' }}>making an impact.</span></h2>
                        <div class="row" style={{ paddingRight: "2rem", paddingTop: "1.5rem" }}>
                            <div class="col span-1-of-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z" fill="#335EEA"></path><path d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z" fill="#335EEA" opacity=".3"></path></g></svg>
                            </div>
                            <div class="col span-5-of-6">
                                <h4>Production</h4>
                                <p style={{ fontSize: '0.8rem' }}>We only choose premium-quality, planet-friendly materials to design our products.</p>
                            </div>
                        </div>
                        <div class="row" style={{ paddingRight: "2rem", paddingTop: "1rem" }}>
                            <div class="col span-1-of-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                            </div>
                            <div class="col span-5-of-6">
                                <h4>Education</h4>
                                <p style={{ fontSize: '0.8rem' }}>A big part of our marketing focuses on educating our audience about sustainable living and the importance of hydration.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col span-2-of-5 img-3d">
                        <img class="about-img-2" src={sprout} />
                    </div>
                </div>
                <div class="row about-1" id='contact'>
                    <div class="col span-1-of-2">
                        <form class="about-form">
                            <img class="about-img-1" src={photo2} /><br />
                            <input type="text" placeholder="Name" id="name" name="name" oninvalid="invalidName(this)" oninput="invalidName(this)" /><br />
                            <input type="email" placeholder="Email" id="email" name="email" oninvalid="invalidEmail(this)" oninput="invalidEmail(this)" /><br />
                            <input type="submit" class="btn btn-submit" id="btn-submit" value="Contact Us" onsubmit="handleSubmit()" />
                        </form>
                    </div>
                    <div class="col span-1-of-2">
                        <h2>Don't think you're too small to create a real change.</h2>
                        <p>You are an active player in the world. And you can make our planet a better place without turning into an eco-militant! Start with simple steps and cultivate an attitude of conscious choices.</p>
                        <div class="row">
                            <div class="col span-1-of-2 about-check">
                                <p><i class="fas fa-check-circle"></i>Change the world</p>
                            </div>
                            <div class="col span-1-of-2 about-check">
                                <p><i class="fas fa-check-circle"></i>Wellbeing</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col span-1-of-2 about-check">
                                <p><i class="fas fa-check-circle"></i>Active cleanup</p>
                            </div>
                            <div class="col span-1-of-2 about-check">
                                <p><i class="fas fa-check-circle"></i>Raising awareness</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row testimonials" id="mission">
                <h2 style={{ textAlign: 'center', color: '#335eea' }}>Did you know?</h2>
                <p style={{ textAlign: 'center' }}>One Hydros bottle typically replaces about 217 single-use plastic ones per year.</p>
                <div class="slider">
                    <div class="slide-item">
                        <div class="row">
                            <div class="col span-1-of-2 slide-item-left">
                                <img src={photo1} />
                            </div>
                            <div class="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU FEEL GOOD...</p>
                                <h6>with proper hydration</h6>
                            </div>
                        </div>
                    </div>
                    <div class="slide-item" style={{ display: 'none' }}>
                        <div class="row">
                            <div class="col span-1-of-2 slide-item-left">
                                <img src={photo3} />
                            </div>
                            <div class="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU LOOK GOOD...</p>
                                <h6>with beautifully crafted water bottles</h6>
                            </div>
                        </div>
                    </div>
                    <div class="slide-item" style={{ display: 'none' }}>
                        <div class="row">
                            <div class="col span-1-of-2 slide-item-left">
                                <img src={photo4} />
                            </div>
                            <div class="col span-1-of-2 slide-item-right">
                                <h3>With every Hydros bottle you purchase...</h3>
                                <p>YOU DO GOOD...</p>
                                <h6>by choosing nature-friendly products</h6>
                            </div>
                        </div>
                    </div>
                    <label class="next" onclick="plusSlides(1)"><i class="fas fa-arrow-right"></i></label>
                    <label class="prev" onclick="plusSlides(-1)"><i class="fas fa-arrow-left"></i></label>
                </div>
            </div>
            <div class="shape-1">
                <div class="shape-bottom">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
                </div>
            </div>
            <footer>
                <div class="row">
                    <div class="col span-1-of-5">
                        <img />
                        <p>A better way to build.</p>
                        <div class="row">
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div class="col span-4-of-5">
                        <div class="row">
                            <div class="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>PRODUCTS</h6>
                                <a href="#">Page Builder</a>
                                <a href="#">UI Kit</a>
                                <a href="#">Styleguide</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                            </div>
                            <div class="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>SERVICES</h6>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Pagebuilder</a>
                                <a href="#">UI Kit</a>
                            </div>
                            <div class="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>CONNECT</h6>
                                <a href="#">Page Builders</a>
                                <a href="#">UI Kit</a>
                                <a href="#">Styleguide</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                            </div>
                            <div class="col span-1-of-4" style={{ margin: '0' }}>
                                <h6>LEGAL</h6>
                                <a href="#">Documentation</a>
                                <a href="#">Changelog</a>
                                <a href="#">Pagebuilder</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    );
}

export default App;
