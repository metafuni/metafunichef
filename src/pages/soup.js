import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Soup extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  };

  updateSearch(event) {
    this.setState({ search: event.target.value });
  };

  render() {
    const { data } = this.props;

    let filteredRecipes = data.allContentfulRecipes.edges.filter((recipe) => {
        return recipe.node.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
        recipe.node.ingredients.ingredients.includes(this.state.search.toLowerCase()) || 
        recipe.node.diet.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.origin.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.difficulty.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.tags.indexOf(this.state.search.toLowerCase()) !== -1;
        });
    return (
      <Layout>
        <SEO
          title="Main Recipes"
          keywords={[`Metafuni Chef`, `Italian`, `World`, `Cooking`, `Soup`, `Recipes`, `Creative`, `Authentic`, `Traditional`]}
        />
        <div className="site-container blogs-page" id="Soup">
          <div className="container">
            <div className="section-head" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
            <div className="see-more" style={{margin: '0', textAlign: 'end', maxWidth: '200px'}}>
                <Link to="/recipes" style={{paddingTop: '3px', paddingBottom: '3px'}}>
                  <span><i className="fas fa-chevron-left" style={{marginRight: '.5rem'}}></i>all recipes</span>
                </Link>
              </div><br></br>
              <h1 className="line-heading h2">Soup Recipes</h1>
            </div>
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder=" search soup or ingredient..."
              className="inputbox"
            />
            <ul
              className={`blogs-list ${filteredRecipes.length < 5 ? "few-blogs" : ""}`}
            >
              {filteredRecipes.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={`/${item.node.slug}`} />
                      {item.node.image ? (
                        <Img
                          fluid={item.node.image.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                          <div className="no-image"></div>
                        )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          <div className="diet"><i className="fas fa-utensils"></i>{item.node.category}</div>

                          <div className="diet">
                            {item.node.diet === "Chicken" || item.node.diet === "Beef" || item.node.diet === "Veal" || item.node.diet === "Lamb" || item.node.diet === "Pork" || item.node.diet === "Turkey" || item.node.diet === "Goat" || item.node.diet === "Duck" || item.node.diet === "Rabbit" || item.node.diet === "Game" ? (<i className="fas fa-drumstick-bite"></i>) : null}
                            {item.node.diet === "Fish" || item.node.diet === "Seafood" ? (<i className="fas fa-fish"></i>) : null}
                            {item.node.diet === "Vegetarian" ? (<i className="fas fa-carrot"></i>) : null}
                            {item.node.diet === "Vegan" ? (<i className="fas fa-leaf"></i>) : null}
                            {item.node.diet}
                          </div>

                          <div className="diet">
                            <i className="fas fa-stopwatch"></i>{item.node.duration}
                          </div>

                          <div className="diet">
                            <i className="fas fa-tachometer-alt"></i>{item.node.difficulty}
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SoupQuery {
    allContentfulRecipes(sort: {fields: createdAt, order: DESC}, filter: {
        category: {eq: "Soup"}
      }) {
      edges {
        node {
          title
          slug
          image {
            fluid(maxWidth: 1500) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
          category
          origin
          diet
          duration
          difficulty
          ingredients {
            ingredients
          }
          tags
        }
      }
    }
  }
`;
