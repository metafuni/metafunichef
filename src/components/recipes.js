import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

export default class Recipes extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="blogs-section section" id="Recipes">
        <div className="container">
          <div className="section-head">
            <h2>Latest recipes</h2>
          </div>
          <ul
            className={`blogs-list ${data.edges.length < 5 ? "few-blogs" : ""}`}
          >
            {data.edges.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <Link className="link" to={`/${item.node.slug}`} />

                    {item.node.image ? (
                      <Img
                        fluid={item.node.image.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt={item.node.image.description}
                      />
                    ) : (
                        <div className="no-image"></div>
                      )}
                    <div className="details">
                      <h3 className="title">{item.node.title}</h3>
                      <div className="date">

                        <div className="diet"><i className="fas fa-utensils"></i>{item.node.category}</div>
                        <div className="diet">
                          {item.node.diet === "Chicken" || item.node.diet === "Beef" || item.node.diet === "Veal" || item.node.diet === "Lamb" || item.node.diet === "Pork" || item.node.diet === "Turkey" || item.node.diet === "Goat" || item.node.diet === "Duck" || item.node.diet === "Rabbit" || item.node.diet === "Game" ? (<i className="fas fa-drumstick-bite"></i>) : null}
                          {item.node.diet === "Fish" ? (<i className="fas fa-fish"></i>) : null}
                          {item.node.diet === "Vegetarian" ? (<i className="fas fa-carrot"></i>) : null}
                          {item.node.diet === "Vegan" ? (<i className="fas fa-leaf"></i>) : null}
                          {item.node.diet}
                        </div>

                        <div className="diet">
                          <i className="fas fa-tachometer-alt"></i>{item.node.difficulty}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="see-more">
            <Link to="/recipes">
              <span>More Recipes</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
