import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class Blogs extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="blogs-section section" id="Blogs">
          <div className="container">
            <div className="section-head">
              <h2>Blog</h2>
            </div>
            <ul
              className={`blogs-list ${data.edges.length < 5 ? "few-blogs" : ""}`}
            >
              {data.edges.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={`/${item.node.slug}`} />

                      {item.node.featureImage ? (
                        <Img
                          fluid={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                          <div className="no-image"></div>
                        )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <i className="fas fa-pencil-alt" style={{transform: 'scale(.8)'}}></i>{" "}
                          {item.node.createdAt}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="see-more">
              <Link to="/blogs">
                <span>See More</span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
