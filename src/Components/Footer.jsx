import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <div className="footer__option ">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer__option__item">
                                    <h5>About us</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur rem illo quis numquam, minima eos quam eum expedita? Reprehenderit quibusdam perferendis repudiandae rem corrupti.</p>
                                    <NavLink to="/about" className="read__more">Read more <span className="arrow_right"></span></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-3">
                                <div className="footer__option__item">
                                    <h5>Who we are</h5>
                                    <ul>
                                        <li><NavLink to="#">Team</NavLink></li>
                                        <li><NavLink to="#">Carrers</NavLink></li>
                                        <li><NavLink to="#">Contact us</NavLink></li>
                                        <li><NavLink to="#">Locations</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-3">
                                <div className="footer__option__item">
                                    <h5>Our work</h5>
                                    <ul>
                                        <li><NavLink to="#">Service</NavLink></li>
                                        <li><NavLink to="#">Latest</NavLink></li>
                                        <li><NavLink to="#">Browse Archive</NavLink></li>
                                        <li><NavLink to="#">Video for web</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="footer__top__social">
                                    {/* <NavLink to="#"><i className=""></i></NavLink>
                                        <NavLink to="#"><i className="></i></NavLink>
                                        <NavLink to="#"><i className=""></i></NavLink>
                                        <NavLink to="#"><i className=""></i></NavLink> */}
                                </div>                                 </div>                                </div>
                    </div>                          <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <p className="footer__copyright__text">Copyright &copy;
                            All rights reserved | This template is made with <i
                                        aria-hidden="true"></i> by <NavLink to="" target="_blank">Brand</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer