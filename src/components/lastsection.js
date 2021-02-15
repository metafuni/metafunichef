import React, { Component } from "react";
import BgImage from "./sectionbackground3.jpg";

export default class Lastsection extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="info3 section" id="Info3" style={{ backgroundImage: `${BgImage}` }}>
        <div className="container">
          <div className="section-main row">
            <div className="left col-md-7 col-lg-8">
              <div className="about-details">
                <p style={{ marginBottom: '1.5rem' }}>{data.childContentfulLastsectionDescriptionTextNode.description}</p>
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