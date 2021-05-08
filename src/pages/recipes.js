import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class Recipes extends Component {
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
    if (this.state.search !== "") {
      console.log(data.allContentfulRecipes.edges[0].node.tags[1].includes(this.state.search));

    };

    let filteredRecipes = data.allContentfulRecipes.edges.filter((recipe) => {
      return recipe.node.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.ingredients.ingredients.includes(this.state.search.toLowerCase()) ||
        recipe.node.diet.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.origin.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.difficulty.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        recipe.node.tags.indexOf(this.state.search.toLowerCase()) !== -1;
    });
    let firstPasta = filteredRecipes.filter((recipe) => {
      return recipe.node.category === "Pasta"
    })[0];
    let firstRisotto = filteredRecipes.filter((recipe) => {
      return recipe.node.category === "Risotto"
    })[0];
    let firstSoup = filteredRecipes.filter((recipe) => {
      return recipe.node.category === "Soup"
    })[0];
    let firstMain = filteredRecipes.filter((recipe) => {
      return recipe.node.category === "Main"
    })[0];
    let firstSide = filteredRecipes.filter((recipe) => {
      return recipe.node.category === "Side"
    })[0];
    return (
      <Layout>
        <SEO
          title="Recipes"
          keywords={[`Metafuni Chef`, `Italian`, `World`, `Cooking`, `Recipes`, `Creative`, `Authentic`, `Traditional`]}
        />
        <div className="site-container blogs-page" id="Recipes" style={{ minHeight: '90vh' }}>
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Recipes</h1>
            </div>
            <div className="blogs-list">
              <div className="inner" style={{width: '50%', padding: '1rem'}}>
              <Link to="/pasta" className="link" style={{textDecoration: 'none', color: '#333333b8'}}>
                <Img
                  fluid={firstPasta.node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  className="recipeimg"
                  style={{maxHeight: '350px'}}
                  alt={firstPasta.node.image.description}
                />
                <div className="details" style={{textAlign: 'center'}}>
                  <h3 className="title" style={{margin: '.5rem auto'}}>Pastas</h3>
                </div>
              </Link>
              </div>
              
              <div className="inner" style={{width: '50%', padding: '1rem'}}>
              <Link to="/risotto" className="link" style={{textDecoration: 'none', color: '#333333b8'}}>
                <Img
                  fluid={firstRisotto.node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{maxHeight: '350px'}}
                  alt={firstRisotto.node.image.description}
                />
                <div className="details" style={{textAlign: 'center'}}>
                  <h3 className="title" style={{margin: '.5rem auto'}}>Risottos</h3>
                </div>
              </Link>
              </div>              
              <div className="inner" style={{width: '50%', padding: '1rem'}}>
              <Link to="/soup" className="link" style={{textDecoration: 'none', color: '#333333b8'}}>
                <Img
                  fluid={firstSoup.node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{maxHeight: '350px'}}
                  alt={firstSoup.node.image.description}
                />
                <div className="details" style={{textAlign: 'center'}}>
                  <h3 className="title" style={{margin: '.5rem auto'}}>Soups</h3>
                </div>
              </Link>
              </div>              
              <div className="inner" style={{width: '50%', padding: '1rem'}}>
              <Link to="/main" className="link" style={{textDecoration: 'none', color: '#333333b8'}}>
                <Img
                  fluid={firstMain.node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{maxHeight: '350px'}}
                  alt={firstMain.node.image.description}
                />
                <div className="details" style={{textAlign: 'center'}}>
                  <h3 className="title" style={{margin: '.5rem auto'}}>Mains</h3>
                </div>
              </Link>
              </div>              
              <div className="inner" style={{width: '50%', padding: '1rem'}}>
              <Link to="/side" className="link" style={{textDecoration: 'none', color: '#333333b8'}}>
                <Img
                  fluid={firstSide.node.image.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  style={{maxHeight: '350px'}}
                  alt={firstSide.node.image.description}
                />
                <div className="details" style={{textAlign: 'center'}}>
                  <h3 className="title" style={{margin: '.5rem auto'}}>Sides</h3>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query RecipesQuery {
    allContentfulRecipes(sort: {fields: createdAt, order: DESC}) {
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
            description
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
