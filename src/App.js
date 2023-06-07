import React from "react";
import logo from "./images/logo.svg";
import "./App.css";
import { Component } from "react";
import GameGallery from "./Component/GameGallery";

class App extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="hero-section">
            <nav>
              <img src={logo} alt="logo" className="logo" />
              <div
                id="navLinks"
                className={
                  this.state.clicked ? "#navLinks sideBar" : "#navLinks"
                }
              >
                <ul>
                  <li>
                    <a href="About">About</a>
                  </li>
                  <li>
                    <a href="About">Careers</a>
                  </li>
                  <li>
                    <a href="About">Events</a>
                  </li>
                  <li>
                    <a href="About">Products</a>
                  </li>
                  <li>
                    <a href="About">Support</a>
                  </li>
                </ul>
              </div>
              <div id="menuIcons" onClick={this.handleClicked}>
                <i
                  className={
                    this.state.clicked
                      ? "fas fa-times activeNav"
                      : "fas fa-bars  nav"
                  }
                ></i>
              </div>
            </nav>
            <div id="hero-content">
              <div className="headerText">
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
              </div>
            </div>
          </div>
          <div id="gallery">
            <div className="row">
              <div className="col1"></div>
              <div className="col2">
                <h2 className="galleryTitle">THE LEADER IN INTERACTIVE VR</h2>
                <p>
                  Founded in 2011, Loopstudies has been producing world-class
                  virtual reality projects for some of the best companies around
                  the globe. Our award-winning creations have transformmed
                  business through digital experiences that bind to their brand
                </p>
              </div>
            </div>
          </div>
          <div id="creations">
            <div className="creationsGallery">
              <div className="headerFrame">
                <h2>OUR CREATIONS</h2>
                <button>SEE ALL</button>
              </div>
              <GameGallery />
            </div>
          </div>
          <footer>
            {/*left*/}
            <div className="leftFooter">
              <img src={logo} alt="logo" />
              <div>
                <a href="index.js">About</a>
                <a href="index.js">Careers</a>
                <a href="index.js">Events</a>
                <a href="index.js">Products</a>
                <a href="index.js">Support</a>
              </div>
            </div>
            {/*right*/}
            <div className="rightFooter">
              <div className="socialIcons">
                <a href="index.js">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="index.js">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="index.js">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="index.js">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              &copy;2021 Loopstudies All rights reserved
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
