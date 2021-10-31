import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './travel-agency-logo.png'
import './Navbar.css'
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';



initializeAuthentication();

const Navbar = () => {

    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary">
            <div className="container-fluid">

                <div className="d-flex justify-content-center  align-items-center">
                    <div>
                        <img src={Logo} style={{ width: "50px", borderRadius: "50%", marginRight: "20px" }} alt="" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-uppercase">Travel Booking <span className="text-warning"> agency</span></h4>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link className="navlink" to='/home'>
                            <li className="nav-item mx-3" >
                                <a className="nav-link text-black" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link className="navlink" to='/destinations'>
                            <li className="nav-item mx-3">
                                <a className="nav-link text-black" href="#">Destinations</a>
                            </li>
                        </Link>
                        {
                            user?.email && <Link className="navlink" to='/myorders'>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-black" href="#">My orders</a>
                                </li>
                            </Link>
                        }
                        {
                            user?.email && <Link className="navlink" to='/manageorders'>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-black" href="#">Manage All orders</a>
                                </li>
                            </Link>
                        }
                        {
                            user?.email && <Link className="navlink" to='/addService'>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-black" href="#">Add a Service</a>
                                </li>
                            </Link>
                        }
                    </ul>


                    <span className="navbar-text ms-1">

                        {
                            user?.email && <button className="btn btn-success">{user.displayName}</button>
                        }
                        {
                            user?.email ? <button onClick={logOut} className="btn btn-primary ms-2" >Log Out</button>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-warning" >Log In</button>
                                </Link>
                        }


                    </span>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;