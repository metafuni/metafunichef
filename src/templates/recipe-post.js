import React, { Component } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { DiscussionEmbed } from "disqus-react";
import Parallax from "react-rellax";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

export default class recipePost extends Component {
  render() {
    const data = this.props.data.contentfulRecipes;
    const disqusShortname = "metafuni-chef";
    const disqusConfig = {
      identifier: data.id,
      title: data.title
    };

    const siteurl = this.props.data.contentfulSiteInformation.siteUrl + "/";
    const twiteerhandle = this.props.data.contentfulSiteInformation
      .twiteerHandle;
    const socialConfigss = {
      site: {
        siteMetadata: { siteurl, twiteerhandle }
      },
      title: data.title,
      slug: data.slug
    };

    return (
      <Layout>
        <div className="banner">
          <Parallax speed={2} style={{ height: '100vh' }} className="parallax-container">
            <Img
              fluid={data.image.fluid}
            />
          </Parallax>
          <div className="container" style={{ padding: '2.25rem 1rem', textAlign: 'center' }}>
            <div className="banner-details">
              <h1 style={{ marginBottom: '2rem' }}>{data.title}.</h1>
            </div>
          </div>
        </div>
        <SEO
          title={data.title}
          keywords={['Metafuni Chef', 'Italian', 'World', 'Cooking', `${data.title}`, `${data.category}`, `${data.origin}`, `${data.diet}`, data.tags.map(el => (
            `${el} `
          ))]}
        />

        <div className="site-container blog-post" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <h3 style={{ fontSize: '1.56rem', opacity: '.85', textAlign: 'center' }}>{data.childContentfulRecipesSubtitleTextNode.subtitle}</h3>
            <div className="diet-info" style={{ opacity: '.95', marginBottom: '7.5rem', marginTop: '2rem' }}>
              <div className="diet-info-item"><i className="fas fa-utensils"></i>{data.category}</div>
              <div className="diet-info-item"><i className="fas fa-map-pin"></i>{data.origin}</div>
              <div className="diet-info-item">
                {data.diet === "Chicken" || data.diet === "Beef" || data.diet === "Veal" || data.diet === "Lamb" || data.diet === "Pork" || data.diet === "Turkey" || data.diet === "Goat" || data.diet === "Duck" || data.diet === "Rabbit" || data.diet === "Game" ? (<i className="fas fa-drumstick-bite"></i>) : null}
                {data.diet === "Fish" ? (<i className="fas fa-fish"></i>) : null}
                {data.diet === "Vegetarian" ? (<i className="fas fa-carrot"></i>) : null}
                {data.diet === "Vegan" ? (<i className="fas fa-leaf"></i>) : null}
                {data.diet}
              </div>
              <div className="diet-info-item">
                <i className="fas fa-stopwatch"></i>{data.duration}
              </div>

              <div className="diet-info-item">
                <i className="fas fa-tachometer-alt"></i>{data.difficulty}
              </div>
            </div>
            <div className="section-main row">
              <div className="left col-md-4 col-lg-4">
                <div className="about-details">
                  <div className="ingredients">
                    <h2>Ingredients ({data.serves} persons)</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.ingredients.childMarkdownRemark.html
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="right col-md-8 col-lg-8 mb-3">
                <div className="description">
                  <h2>Cooking Instructions</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.description.childMarkdownRemark.html
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="details">
              <div className="tip" style={{ color: 'rgba(51, 51, 51, 0.85)', margin: '2rem auto', fontStyle: 'italic', border: '1px solid rgba(51, 51, 51, 0.85)', padding: '1rem 1.75rem', borderRadius: '.5rem' }}>
                <h3>Tip:</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.tip.childMarkdownRemark.html
                  }}
                />
              </div>
            </div>
            <Share
              className="see-more-social"
              socialConfig={{
                ...socialConfigss.site.siteMetadata.twiteerhandletitle,
                config: {
                  url: `${siteurl}${socialConfigss.slug}`,
                  title: `${socialConfigss.title}`
                }
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query singlePostQueryAndSinglePostQueryAndSinglePostQueryAndSinglePostQuery  ($slug: String!) {
    contentfulRecipes(slug: { eq: $slug }) {
      id
      title
      slug
      category
      origin
      ingredients {
        childMarkdownRemark	{
          html
        }
      }
      tags
      diet
      serves
      duration
      difficulty
      childContentfulRecipesSubtitleTextNode {
        subtitle
      }
      tip {
        childMarkdownRemark {
          html
        }
      }
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
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
      twiteerHandle
    }
  }
`;
