import React from "react";
import { Link } from "react-router-dom";
export default function Aboutpage() {
  return (
    <div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        <div className="col-lg-6">
          <h3 className="myheading">
            <b>The Online Perfume Shop in India!</b>
          </h3>
          <center>
            <quote className="myquote" style={{ color: "white" }}>
              "A Perfume is something invisible yet an unforgettable accessory"
            </quote>
          </center>
          <p className="myparagraph">
            We at Eunoia help you recognizing and creating fragrant memory for
            years to come. We are going to make a journey you will never forget.
            Eunoia is an independent company from “The City Mumbai ” we will
            provide you the best collection of fragrance online at the best
            price with 100% brand authenticity. We assure you that don’t deal in
            fake perfumes, clones, or knockoffs. For us, customer satisfaction
            is our topmost priority.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            src="https://barbaraiweins.com/wp-content/uploads/2022/08/Best-Perfumes-for-Men-Women.jpg"
            class="img-fluid myimg5"
            alt="..."
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h3 className="myheading">
            <b>Reason to choose us as Your Online Perfume Store</b>
          </h3>
          <p className="myparagraph">
            When you buy perfumes from malls, or anywhere on the high street,
            you are paying for the high overheads of the store. Unlike the
            malls, we believe in offering great value upfront and not hiding
            high additional costs at the end of the process. So if you’re
            looking for the best value designer perfumes, look no further, we’re
            proven to be the best value!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://cdn2.stylecraze.com/wp-content/uploads/2021/11/8-Best-Jimmy-Choo-Perfumes-That-Hit-All-The-Right-Notes.jpg"
            class="img-fluid myimage4"
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <h3 className="myheading">
            <b>
              How Are We Able to Offer Such Great Value for Online Perfume
              Shopping?
            </b>
          </h3>
          <ul
            style={{
              color: "white",
            }}
          >
            <li>No expensive rents on swanky retail showrooms.</li>
            <li>No external investors to please or payback.</li>
            <li>
              The perfumes are stocked in our warehouse, not in an
              air-conditioned retail environment.
            </li>
            <li>
              We use more technology and fewer people to keep our overheads low.
            </li>
            <li>
              You save more with your online perfume store because you buy
              ‘Direct’ – avoiding retailers.
            </li>
          </ul>
        </div>

        <center>
          <p
            style={{
              color: "white",
              textIndent: "3px",
            }}
          >
            Sounds Interesting? Think no more and reach us today. Explore
            through our wide range of perfumes and pick your choice as you
            prefer. Sign up to the best online perfume store in India today to
            find your scent in our stocks!
          </p>
        </center>
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
    </div>
  );
}
