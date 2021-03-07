import React, { Component } from 'react';
import './Style.css';
import Service1 from '../Images/services1.png';
import Service2 from '../Images/services2.png';

class Services extends Component {
  render() {
    return (
      <div>
        <section id="Services">
          <div className="container" className="p-4">
            <div>
              <h2 className="text-center pt-2">Our Services</h2>
              <p className="lead text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vehicula vulputate commodo. Morbi auctor rutrum tortor sed
                fermentum.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="media service-wrap">
                  <div className="media-left">
                    <img
                      src={Service1}
                      className="mr-3 media-object"
                      alt="Digital Marketing"
                    />
                  </div>
                  <div className="media-body">
                    <h5 className="mt-0">Digital Marketing</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce vehicula vulputate commodo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="media service-wrap">
                  <div>
                    <img
                      src={Service2}
                      className="pr-3"
                      width="64px"
                      height="64px"
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading">Digital Marketing</h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vehicula vulputate commodo.
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

export default Services;
