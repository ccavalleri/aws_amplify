import React, { Component } from 'react';
import Slider1 from '../Images/ai.jpeg';
import './Style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Slider1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={Slider1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section id="features">
          <div className="container text-center pt-4">
            <h2>Features</h2>
            <p className="lead">Discover our services</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-battery-three-quarters"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-laptop"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-dna"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-bomb"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-cubes"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-wrap">
                  <i className="fa fa-film"></i>
                  <h2>Business Analysis</h2>
                  <h3>Collect customer requirements</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="container text-center pt-4">
            <h2>Portfolio</h2>
            <p className="lead">Discover our services</p>
          </div>
          <div className="container"></div>
        </section>
        <section id="faqs">
          <div className="container text-center pt-4">
            <h2>Faq's</h2>
            <p className="lead">Discover our services</p>
          </div>
          <div className="container">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{' '}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
