import React from 'react'
import "./components.css"



const Components = () => {
    return (
        <>
            <div className="main_container">
                <nav className="nav">

                    <div className="brand">
                        <img className="brand_img" src="/images/brand1.jpeg" alt="" />
                        <img className="brand_img" src="/images/Union 1.png" alt="" />
                        <img className="brand_img" src="/images/Group 66.png" alt="" />
                    </div>
                    <div className="search">
                        <button className="search_btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        <input type="text" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <div className="sign"><span>Create account.</span><span className="link">It's free! </span><i className="fa fa-sort-desc" aria-hidden="true">
                        {/* <div className="uservalid">
                        <h3 className="signup">sign-up</h3>
                        <h3 className="login">Login</h3>
                    </div> */}
                    </i>

                    </div>
                </nav>

                <nav className="nav_mobile">
                    <div className="nav_mobile_cont">
                        <i className="fas fa-square"></i>
                        <i className="fas fa-circle"></i>
                        <i className="fas fa-triangle fa-rotate-180"></i>
                    </div>
                </nav>

                <div className="imgcontainer">
                    <img className="main" src="/images/Rectangle 2.png" alt="" />
                    <img className="main_mobile" src="/images/Rectangle 2 mobile.png" alt="" />

                    <span className="computer">Computer Engineering</span>
                    <span className="small">142,765 Computer Engineers follow this</span>

                </div>

                <div className="center_nav">
                    <ul className="list">
                        <li className="All_Posts">All Posts(32)</li>
                        <li className="hide" >Article</li>
                        <li className="hide">Event</li>
                        <li className="hide">Job</li>

                    </ul>
                    <li className="filter_mobile"><label >Filter:</label>

                        <select className="select_mobile" >
                            <option >All</option>
                            <option>Article</option>
                            <option >Event</option>
                            <option >Job</option>
                        </select></li>
                    <div className="right">
                        <div className="post_btn">
                            <span>Write a post</span>
                            <i className="fa fa-sort-desc" aria-hidden="true"></i>
                        </div>

                        <button className="join_desktop"><img src="/images/Vector.png" alt="" /> Join Group</button>

                    </div>
                    <button className="join_mobile">Join Group</button>
                    <button className="postadd_mobile"><i className="far fa-pencil"></i></button>
                </div>


                <div className="main_center">
                    <div className="left_container">
                        <div className="post">
                            <img src="/images/Rectangle 5.png" alt="" className="post_image" />
                            <div className="post_content">
                                <img src="/images/hand.png" alt="" />
                                <div className="post_heading">
                                    <h2>What if famous brands had regular fonts? Meet RegularBrands!</h2>
                                    <button><img src="/images/Vector (1).png" alt="" className="option" /></button>
                                </div>
                                <h4>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h4>
                                <div className="post_bottom">
                                    <div className="user">
                                        <img src="/images/Rectangle 3.png" alt="" />
                                        <span className="user_name">Sarthak Kamra</span>
                                    </div>
                                    <div className="info">
                                        <div className="view_wrapper">
                                            <i className="fa fa-eye"></i>
                                            <span className="views">1.4k views</span>
                                        </div>
                                        <div className="share"> <i className="fa fa-share-alt"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post">
                            <img src="/images/Rectangle 5.png" alt="" className="post_image" />
                            <div className="post_content">
                                <img src="/images/hand.png" alt="" />
                                <div className="post_heading">
                                    <h2>What if famous brands had regular fonts? Meet RegularBrands!</h2>
                                    <button><img src="/images/Vector (1).png" alt="" className="option" /></button>
                                </div>
                                <h4>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h4>
                                <div className="post_bottom">
                                    <div className="user">
                                        <img src="/images/Rectangle 3.png" alt="" />
                                        <span className="user_name">Sarthak Kamra</span>
                                    </div>
                                    <div className="info">
                                        <div className="view_wrapper">
                                            <i className="fa fa-eye"></i>
                                            <span className="views">1.4k views</span>
                                        </div>
                                        <div className="share"> <i className="fa fa-share-alt"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>





                    <div className="right_container">

                        <div className="right_wrapper">
                            <div className="location_container">
                                <div className="location">
                                    <i className="far fa-map-marker-alt"></i>
                                    <span>Noida,India</span>
                                </div>
                                <i className="fas fa-pen"></i>
                            </div>
                            <div className="location_info">
                                <i className="far fa-info-circle" aria-hidden="true"></i>
                                <span>Your location will help us serve better and extend a personalised experience.</span>
                            </div>
                        </div>


                        <div className="groups_suggestion">
                            <div className="header">
                                <i className="far fa-thumbs-up"></i>
                                <h3>RECOMMENDED GROUPS</h3>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="followed">Followed</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="follow">Follow</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="follow">Follow</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="follow">Follow</button>
                            </div>
                        </div>


                        <div className="see_more_container">
                            <button className="more_btn">See more...</button>
                        </div>

                    </div>

                </div>

                {/* <div className="signup_page">
                <button classname="hide_page">x</button>
                    <div className="signupheader">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼  </div>
                    <div className="signupwrapper">
                        <div className="signupleft">
                            <h2>Create Account</h2>
                            <div className="usersigninput">
                                <div><input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" /></div>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <button className="create_account">Create Account</button>
                            <button className="Signw_face">Sign up with Facebook</button>
                            <button className="signw_google">Sign up with Google</button>
                        </div>

                        <div className="signupright">
                            <h4>Already have an account?<button>Sign In</button></h4>
                            <img src="/images/atg_illustration.png" alt="" />
                            <h5>By signing up, you agree to our Terms & conditions, Privacy policy</h5>

                        </div>
                    </div>

                </div>

                <div className="cover"></div> */}
            </div>
        </>
    )
}

export default Components
