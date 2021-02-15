import React, { Component } from "react";
import BgImage from "./sectionbackground2.jpg";

export default class Extrasection extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="info2 section" id="Info2" style={{ backgroundImage: `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div className="section-main row">
            <div className="left col-md-7 col-lg-8">
              <div className="about-details">
                <p style={{ marginBottom: '1.5rem' }}>{data.childContentfulExtrasectionExtrasectionTextTextNode.extrasectionText}</p>
              </div>
            </div>
            <div className="right col-md-5 col-lg-4 mb-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
              <h3 style={{fontSize: '1.75rem'}}>{data.title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};