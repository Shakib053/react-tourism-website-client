import React from 'react';
import { Link } from 'react-router-dom';
import image from './payment.png'
import logo from '../Navbar/travel-agency-logo.png'
import './footer.css'
const Footer = () => {
    return (
        <div className="text-center primary p-2 ">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5 container-fluid">
                <div class="col">
                    <div class="card " >
                        <div class="card-body primary">
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo} className="" style={{ width: "50px", height: "50%", borderRadius: "50%", marginRight: "20px" }} alt="" srcset="" />
                                <h3 className="card-title my-4">Travel Booking <span className="text-warning">Agency</span></h3>
                            </div>

                            <Link to='/doctors'><h6 className="text-black my-3">Privacy Policy</h6></Link>
                            <Link to=''><h6 className="text-black my-3">Terms & Conditions</h6></Link>
                            <Link to='/aboutus'><h6 className="text-black my-3">About Us</h6></Link>
                            <Link to='/contactus'><h6 className="text-black my-3">Contact Us</h6></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card  ">
                        <div class="card-body primary">
                            <h3 class="card-title text-capitalize">Follow us on the social media</h3>
                            <Link><p className="card-text my-3 text-black"><i class="fab fa-facebook-square fa-2x"></i></p></Link>
                            <Link>   <p className="card-text m-3 text-black"><i class="fab fa-instagram fa-2x"></i></p></Link>
                            <Link>      <p className="card-text my-2 text-black"><i class="fab fa-twitter-square fa-2x"></i></p></Link>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <div class="card bg-primary ">
                        <img src={image} className="img-fluid" alt="" srcset="" />

                    </div>
                </div>

            </div>
            <p className="my-5"> &copy; <strong>All rights reserved by Travel Booking Agency 2021</strong></p>
        </div>
    );
};

export default Footer;