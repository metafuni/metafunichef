import React, { Component } from "react";
import BackgroundImage from 'gatsby-background-image'

export default class Section extends Component {
  render() {
    const { data } = this.props;
    const image = data.sectionImage.fluid;

    return (
      <BackgroundImage
        Tag="section"
        fluid={image}
        className="info section backgroundbanner"
        id="Info"
      >
        <div className="container">
          <div className="section-main row">
            <div className="left col-md-7 col-lg-8">
              <div className="about-details">
                <p style={{ marginBottom: '1.5rem' }}>{data.sectionText.sectionText}</p>
              </div>
            </div>
            <div className="right col-md-5 col-lg-4 mb-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem' }}>{data.sectionTitle}</h3>
            </div>
          </div>
        </div>
      </BackgroundImage>
    );
  }
};