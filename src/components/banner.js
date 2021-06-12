import React, { Component } from "react";

import Img from "gatsby-image";
import Parallax from "react-rellax";

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <Parallax speed={2} className="bannerparallax">
          <Img
            fluid={data.bannerImage.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            imgStyle={{ opacity: '.9' }}
            alt={data.bannerImage.description}
          />
        </Parallax>
        <div className="container">
          <div className="banner-details">
            <h1 style={{ marginBottom: '2rem' }}>{data.designation}.</h1>
            <ul className="social">
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{margin: '0', padding: '0', display: 'flex'}}>
                <a
                  aria-label="Chef Metafuni Instagram Channel"
                  className="fab fa-instagram fa-2x"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderRadius: '.5rem', padding: '1.3rem', marginRight: '.35rem' }}
                > </a>
                <a
                  aria-label="Chef Metafuni Facebook Page"
                  className="fab fa-facebook-f fa-2x"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderRadius: '.5rem', padding: '1.3rem' }}
                > </a>
                </div>
                <span style={{ marginLeft: '.5rem', marginTop: '-.5rem', transform: 'translateY(50%)', textAlign: 'center' }}>Follow on Instagram and Facebook</span>
              </li>
            </ul>
          </div>
          <a
            className="fa fa-chevron-down fa-2x"
            href="#About"
            aria-label="Arrow down to About section"
          > </a>
        </div>
      </div>
    );
  }
};