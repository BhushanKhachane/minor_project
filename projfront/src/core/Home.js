import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import Menu from "./Menu";
import logo from "./wfglogo.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <div>
      <Menu />
      <header class="jumbotron">
        <div class="container">
          <div class="row row-header text-dark text-align-center">
            <div class="col-12 col-sm-8 ">
              <h1>
                <b>Welcome to The World Farm Galaxy</b>
              </h1>
              <p>
                <b>
                  In this fast-paced, heavy-scheduled life, most people do not
                  get enough time to shop for fruits and vegetables. We are here
                  to make your life much simpler by providing fresh, exotic, and
                  organic fruits and vegetables.With a vision to make quality
                  products available at affordable prices, we aim to provide
                  fresh, best-quality, branded products to customers easily.
                  This is made possible by sourcing directly from our network of
                  farms supplying vegetables and fruits to your doorsteps.we
                  delivers farm fresh fruits and vegetables daily at your
                  doorstep so that you eat fresh daily. Whether you are at home
                  or office, you can order at your convenience and leave the
                  task on us. Our Xpress delivery and different delivery slots
                  allow you to buy and get the products delivered at your
                  doorstep whenever you want.In simple words, World Farm Galaxy is
                  the only way to guarantee that you sacrifice neither the
                  quality of your fruits and vegetables nor the money in your
                  wallet!
                </b>
              </p>
            </div>
          </div>
        </div>
      </header>
      <br />

      <div className="row text-center">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/21-12-2020-UNICEF-UN048399-Pakistan.JPG/image1170x530cropped.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1567137827022-fbe18eff7275?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="text-white">All of Vegetables</h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-3 mb-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <h5 className="text-white">About Us</h5>
                <hr />
                <img
                  src={logo}
                  style={{
                    width: "180px",
                    borderRadius: "5%",
                    marginLeft: "5px",
                    marginTop: "10px"
                  }}
                />
                <hr />
                <h6 className="text-white">
                  Thank you for being our valued customer. We are so grateful
                  for the pleasure of serving you and hope we met your
                  expectations.
                </h6>
              </div>
              <div className="footer-icons col-4">
                <h5 className="text-white">Follow Us</h5>
                <hr />
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
                <a href="#">
                <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                </a>
                <hr />
                <p>
                  <i class="text-white fa fa-location-arrow"> Online Market For Farm Products</i> 
                </p>
                <p>
                  <i class="fa fa-phone text-white"> +91-000000008</i>
                </p>
                <p>
                  <i class="fa fa fa-envelope text-white"> info@example.com</i>
                </p>
                <hr />
              </div>
              <div className="col-4">
                <h5 className="text-light">Contact Us</h5>
                <hr />
                <hr />
                <form>
                  <fieldset className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleMessage"
                      placeholder="Message"
                    ></textarea>
                  </fieldset>
                  <fieldset className="form-group text-xs-right">
                    <button type="button" className="btn btn-danger btn-sm">
                      Send
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
