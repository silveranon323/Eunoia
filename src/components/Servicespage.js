import React from "react";
import { Link } from "react-router-dom";
export default function Servicespage() {
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
      <center>
        <h3>
          <b> Brands that We Offer</b>
        </h3>
      </center>
      <div className="row">
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Amouroud.png"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">AMOUROUD</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Atelier-Des-Ors.png"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">ATELIER DES ORS</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Annik-Goutal.png"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">ANNICK GOUTAL</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Bvlgari.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">BVLGARI</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Buberrey.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">BURBERRY</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/BYREDO.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">BYREDO</figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Calvin-Klein.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">CALVIN KLEIN</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Carolina-Herrera.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">CAROLINA HERRERA</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Creed.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">CREED</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Versace.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">VERSACE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Theirry-Muglar.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">THIERRY MUGLER</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Yves-Saint-Laurent.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">YVES SAINT LAURENT</figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/DG.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">D&G</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Davidoff.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">DAVIDOFF</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Ferrari.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">FERRARI</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Givenchy.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">GIVENCHY</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Geofrey-Benne.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">GEOFFREY BEENE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Hugo-Boss.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">HUGO BOSS</figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Issey-Miyake.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">ISSEY MIYAKE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Lalique.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">LALIQUE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Lacoste.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">LACOSTE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Lattaffa.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">LATTAFA</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Michael-Kors.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">MICHAEL KORS</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Mont-Blanc.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">MONT BLANC</figcaption>
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Paco-Rabanne.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">PACO RABANNE</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Prada.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">PRADA</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/05/Annik-Goutal.png"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">ANNICK GOUTAL</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Roberto-Cavalli.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">ROBERTO CAVALLI</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Swiss-Arabian.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">SWISS ARABIAN</figcaption>
          </figure>
        </div>
        <div className="col-lg-2">
          <figure class="figure">
            <img
              src="https://perfumesquare.in/wp-content/uploads/2021/07/Ralph-Lauren-Polo.jpg"
              class="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
            <figcaption class="figure-caption">RALPH LAUREN</figcaption>
          </figure>
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
    </div>
  );
}
