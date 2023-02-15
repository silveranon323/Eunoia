import React from "react";
import App from "../App.css";

import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <>
      <div className="cnav">
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
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="col-sm-6 col-lg-12">
            <div className="container">
              <center>
                <img
                  src="https://perfumekart.in/wp-content/uploads/2020/05/bestsellers_banner-e1589962204540.jpg"
                  class="img-fluid myimage"
                  alt="..."
                />
              </center>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <center>
              <h3 className="myheading">
                <b>
                  {" "}
                  Online Perfume Store in India: Choose from Your Favourite
                  Perfumes & Cologne Collection
                </b>
              </h3>
              <p className="myparagraph">
                If you are looking for an online perfume store in India that
                offers unlimited discounts on branded cologne and fragrances,
                then Eunoia is the best choice for you! We have a stock of more
                than a thousand men’s and women’s perfume to deliver you at your
                doorsteps.
              </p>
              <p className="myparagraph">
                Now, you may have doubts about making the first purchase from an
                online perfume shop. But our online perfume store has colognes
                that include celebrity fragrances, best-sellers, and specially
                fragrance samples for you to try. Explore and find original
                perfume online with us, and buy the next bottle upto 70%
                discount!
              </p>
            </center>
            <button type="button" class="btn btn-outline-danger mybtn">
              Shop Now
            </button>
          </div>
          <div className="col-sm-6 col-lg-6">
            <img
              src="https://www.thesun.co.uk/wp-content/uploads/2022/06/NINTCHDBPICT000741266411.jpg"
              className="img-fluid myimg"
              alt="..."
            />
          </div>
        </div>

        <hr className="ruler" />
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://cdn.luxatic.com/wp-content/uploads/2021/11/best-perfume-brands.jpg"
              class="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-lg-6">
            <p className="mypara2">
              Why Eunoia is Everybody’s Choice for an Online Perfume Store?
            </p>
            <p className="mypara3">
              One of the many reasons why we have become the biggest hub to buy
              perfumes online in India because we
            </p>
            <div className="container">
              <ul className="mybullet">
                <li>
                  bear an inclination towards the finest tastes and choices. And
                  that is the reason, our stock consists of an exclusive range
                  of perfumes- for everyone!
                </li>
                <li>
                  Our collection for the original perfume online is unbeatable
                  and unmatched.
                </li>
                <li>
                  We have a handpicked set of perfumes from all the
                  internationally celebrated brands.
                </li>
                <li>Buy perfume online for every occasion with us!</li>
                <li>
                  Our online perfume shopping portal is all about smooth
                  features and ensuring a high standard customer experience.
                </li>
                <li>
                  Buy perfume online that are 100% authentic and original
                  perfume online products.
                </li>
              </ul>
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
