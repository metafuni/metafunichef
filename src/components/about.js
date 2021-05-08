import React from "react";
import Img from "gatsby-image";

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fluid={data.photo.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.photo.description}
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <span className="name" style={{color: '#333333b8', marginBottom: '2rem', textTransform: 'uppercase'}}>{data.realName}</span>
            <h2 className="sub-position" style={{marginBottom: '2rem'}}>
              Cooking straight from the heart
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
