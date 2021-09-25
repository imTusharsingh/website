import React from 'react'
import "./components.css"



const Components = () => {
    const [ishide, setishide] = React.useState(false)
    const [up, setup] = React.useState(false)


    const visible = () => {
        setishide(true)
    }
    const deactive = () => {
        setishide(false)
        setup(false)
    }

   

    const loginvisible=()=>{
        setup(true)
        setishide(false)
    }

    const signuppage=()=>{
        setup(false)
        setishide(true)
    }


    return (
        <>
            <div className="main_container">
                <nav className="nav">

                    <div className="brand">
                        <img className="brand_img" src="/website/images/brand1.jpeg" alt="" />
                        <img className="brand_img" src="/website/images/Union 1.png" alt="" />
                        <img className="brand_img" src="/website/images/Group 66.png" alt="" />
                    </div>
                    <div className="search">
                        <button className="search_btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                        <input type="text" placeholder="Search for your favorite groups in ATG" />
                    </div>
                    <div className="sign"><span>Create account.</span><span className="link" onClick={() => visible()}>It's free! </span><i className="fa fa-sort-desc" aria-hidden="true">
                      
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
                    <img className="main" src="/website/images/Rectangle 2.png" alt="" />
                    <img className="main_mobile" src="/website/images/Rectangle 2 mobile.png" alt="" />

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

                        <button className="join_desktop"><img src="/website/images/Vector.png" alt="" /> Join Group</button>

                    </div>
                    <button className="join_mobile"onClick={() => visible()}>Join Group</button>
                    <button className="postadd_mobile"><i className="far fa-pencil"></i></button>
                </div>


                <div className="main_center">
                    <div className="left_container">
                        <div className="post">
                            <img src="/website/images/Rectangle 5.png" alt="" className="post_image" />
                            <div className="post_content">
                                <img src="/website/images/hand.png" alt="" />
                                <div className="post_heading">
                                    <h2>What if famous brands had regular fonts? Meet RegularBrands!</h2>
                                    <button><img src="/website/images/Vector (1).png" alt="" className="option" /></button>
                                </div>
                                <h4>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h4>
                                <div className="post_bottom">
                                    <div className="user">
                                        <img src="/website/images/Rectangle 3.png" alt="" />
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
                            <img src="/website/images/Rectangle 5.png" alt="" className="post_image" />
                            <div className="post_content">
                                <img src="/website/images/hand.png" alt="" />
                                <div className="post_heading">
                                    <h2>What if famous brands had regular fonts? Meet RegularBrands!</h2>
                                    <button><img src="/website/images/Vector (1).png" alt="" className="option" /></button>
                                </div>
                                <h4>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</h4>
                                <div className="post_bottom">
                                    <div className="user">
                                        <img src="/website/images/Rectangle 3.png" alt="" />
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
                                    <img src="/website/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="followed">Followed</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/website/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="follow">Follow</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/website/images/Rectangle 3.png" alt="" />
                                    <h3>Activism</h3>
                                </div>
                                <button className="follow">Follow</button>
                            </div>
                            <div className="groups">
                                <div className="avtar">
                                    <img src="/website/images/Rectangle 3.png" alt="" />
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



                <div className={ishide ? "signup_page":"signup_pagedeactive"}>
                    <button className={ishide ?"hide_page_btn":"hide_page_btndeactive"} onClick={() => deactive()}>x</button>
                    <div className={ishide?"signupheader":"signupheaderdeactive"}>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼    </div>
                    <div className={ishide?"signupwrapper":"signupwrapperdeactive"}>
                        <div className="signupleft">
                            <h2>Create Account</h2>
                            <div className="usersigninput">
                                <div><input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" /></div>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="createaccountcont">
                            <button className="create_account">Create Account</button>
                            <a className="create_accountmobile" onClick={()=>loginvisible()}>or,Sign In</a>
                            </div>
                            <button className="Signw_face"><i class="fab fa-facebook"></i>Sign up with Facebook</button>
                            <button className="signw_google"><i class="fab fa-google"></i>Sign up with Google</button>
                        </div>

                        <div className="signupright">
                            <h4>Already have an account?<button onClick={()=>loginvisible()}>Sign In</button></h4>
                            <img src="/website/images/atg_illustration.png" alt="" />
                            <h5>By signing up, you agree to our Terms & conditions, Privacy policy</h5>

                        </div>
                    </div>
                </div>
                <div className={up ?   "login_page" : "login_pagedeactive"}>
                    <button className={up ?"hide_page_btn_login":"hide_page_btn_logindeactive"} onClick={() => deactive()}>x</button>
                    <div className={up? "loginheader": "loginheaderdeactive"} >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼    </div>
                    <div className={up?"loginwrapper":"loginwrapperdeactive"}>
                        <div className="loginleft">
                            <h2 className="hideinmobile">Sign In</h2>
                            <h2 className="mobile">Welcome back!</h2>

                            <div className="userlogininput">

                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                            </div>
                           
                            <div className="createaccountlogincont">
                            <button className="create_accountlogin">Sign In</button>
                            <a className="create_accountloginmobile"  onClick={()=>signuppage()}>or, Create Account</a>

                            </div>
                            <button className="loginw_face"><i class="fab fa-facebook"></i>Sign in with Facebook</button>
                            <button className="loginw_google"><i class="fab fa-google"></i>Sign in with Google</button>
                            <h3 className="forgot">Forgot Password?</h3>
                        </div>

                        <div className="loginright">
                            <h4>Don't have an accoun yet?<button onClick={()=>signuppage()}>Create new for free!</button></h4>
                            <img src="/website/images/atg_illustration.png" alt="" />


                        </div>
                    </div>

                </div>


                <div className={(ishide || up) ?   "cover":"coverdeactive"}></div>
            </div>
        </>
    )
}

export default Components
