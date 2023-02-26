import React from "react";
import "./footer.css";
import {AiFillFacebook} from "react-icons/ai";
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from "react-icons/bs";
import {FaTwitter} from "react-icons/fa";
import { browserouter } from "react-router";import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";function Footer() {
  return (
    <Router>
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Quick links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ui className="list">
              <li>FLights</li>
              <li>Hotels</li>
              <li>Cabs</li>
              <li>Buses</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Support</h4>
            <ui className="list">
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Contact us</li>
            </ui>
          </div>
          {/* Column 4 */}
          <div className="col">
            <h4>Follow us</h4>
            <ui className="follow list-unstyled">
              <li><Link className="soc" as={Link} to={"https://www.linkedin.com/company/toureila"}><BsLinkedin size={35} color='white'/></Link></li>
              <li><Link className="soc" as={Link} to={"https://www.instagram.com/toureila"}><BsInstagram size={30} color='white'/></Link></li>
              <li><Link className="soc" as={Link} to={"https://twitter.com/ToureilaTravel"}><FaTwitter size={30} color='white'/></Link></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row copy">
          <p className="col-sm ">
            &copy;{new Date().getFullYear()} Toureila | All rights reserved |
          </p>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default Footer;