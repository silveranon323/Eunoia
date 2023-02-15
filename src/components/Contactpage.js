import React from "react";
import { Link } from "react-router-dom";
export default function Contactpage() {
  return (
    <>
      <nav className="mynav navbar navbar-expand-lg bg-light mx-10 ">
          <div className="container-fluid">
            <img
              //   src="https://img.freepik.com/premium-vector/elegant-perfume-logo-design_221979-265.jpg?w=2000"
              src="https://www.logogenie.net/icons/preview/4155"
              alt="Logo"
              width="100"
              height="100"
              class="d-inline-block align-text-top"
            />
            <Link
              to="Homepage"
              className="navbar-brand mx-2"
              style={{ fontSize: "30px" }}
            >
              EUNOIA
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  margin: "0px 100px",
                  padding: "20px",
                }}
              >
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Services">
                    SERVICES
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Product">
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
            </div>
          </div>
        </nav>
      <div className="background">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +91 992887595</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="foooter">
        <footer className="myfooter">
          <div className="row">
            <div className="col-lg-4">
              <h4>Contact Us</h4>
              <p>
                Phone: <span className="footerspan"> +91876789833 </span>
              </p>
              <p>
                Email:{" "}
                <span className="footerspan"> Eunoiaofficial@gmail.com </span>
              </p>
              <p>
                Address:
                <span className="footerspan">
                  1st Floor, D-42, Jewel Arcade, Water Field Road, Bandra (w)
                  Mumbai, Maharashtra, 400050 02226403704
                </span>
              </p>
            </div>
            <div className="col-lg-4">
              <h3>Information</h3>
              <ul className="footerspan">
                <li>About Us</li>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Contact Us</li>
                <li>My Account</li>
                <li>Track Shipment</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3>Join Our Newsletter</h3>
              <p className="footerspan">
                Subscribe to our newsletter and get an update of the recent
                products.
              </p>
             
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Type Your Email"
                  aria-label="Search"
                />
              </form>
              <br />
              <center>
                <button
                  className="btn btn-outline-light btn-info"
                  type="submit"
                  style={{ textAlign: "center" }}
                >
                  Subscribe
                </button>
              </center>
            </div>
          </div>
          <hr />
          <center>
            <span>&#169;</span>
            <span>2023 Eunoia - All rights reserved</span>
          </center>
        </footer>
      </div>
    </>
  );
}
