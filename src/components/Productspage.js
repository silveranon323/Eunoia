import React from "react";
import { Link } from "react-router-dom";
export default function Productspage() {
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
      <div className="row">
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/10/150863_281dd40c20d2333a5123a981d2709ec7_1921-300x300.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                1921 By Gucci
                <del>₹27,000.00</del>
                ₹24,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/04/212-Wild-Party-Carolina-Herrera-Edt-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                212 Wild Party For Women By Carolina Herrera Edt (Tester)
                <del> ₹6,200.00</del> ₹4,800.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/06/A-Chant-for-the-Nymph-by-Gucci-100ml-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                A Chant For The Nymph By Gucci-100ml <del> ₹27,000.00</del>{" "}
                ₹24,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/04/A-Song-for-the-Rose-By-Gucci-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                A Song For The Rose By Gucci <del> ₹27,000.00 </del> ₹24,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/06/A-Winter-Melody-Scented-Water-by-Gucci-150ml-1-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                A Winter Melody Scented Water By Gucci -150ml{" "}
                <del> ₹27,000.00 </del>
                ₹24,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/06/Amouage-Epic-Women-Tester-100ml-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Amouage Epic Women (Tester)-100ml <del> ₹20,900.00</del>{" "}
                ₹11,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/04/Andy-Warhol-Lexington-Avenue-by-Bond-No-9-No-Box-768x768.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Andy Warhol Lexington Avenue By Bond No 9 (No Box){" "}
                <del>₹18,000.00</del>
                ₹13,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/04/Annick-Goutal-Grand-Amour-For-Women-Eau-De-Parfum-Spray-100-ml-No-Box-768x768.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Annick Goutal Grand Amour For Women Eau De Parfum Spray (No Box)
                <del>₹12,000.00</del> ₹8,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/06/Armani-Prive-Ikat-Bleu-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Armani Prive – Ikat Bleu (No Cellophane) <del>₹50,000.00</del>{" "}
                ₹25,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/04/Armani-Prive-Pivoine-Suzhou-No-Box-768x768.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Armani Prive – Pivoine Suzhou (No Box) <del>₹14,000.00</del>{" "}
                ₹9,000.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/06/Armani-Si-Eau-De-Parfum-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Armani Si Eau De Parfum <del> ₹7,400.00 </del> ₹6,400.00
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 ">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Bella-Bellissima-Bohemia-Garnet-No-Box-570x570.jpg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <p className="card-text">
                Bella Bellissima Bohemia Garnet (No Box) <del>₹21,000.00</del>{" "}
                ₹12,000.00
              </p>
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
