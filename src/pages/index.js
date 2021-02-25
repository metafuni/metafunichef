import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo"; 

import Banner from "../components/banner";
import About from "../components/about";
import Blogs from "../components/blogs";
import Recipes from "../components/recipes";
import Section from "../components/section";
import Extrasection from "../components/extrasection";
import Lastsection from "../components/lastsection";
import Contact from "../components/contact";
import Photos from "../components/photos";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[`Metafuni Chef`, `${data.contentfulAboutMe.designation}`, `Italian`, `World`, `Cooking`]}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter(item => item === "About")
      .map(t => {
        return <About key="About" data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Recipes")
      .map(t => {
        return <Recipes key="Recipes" data={data.allContentfulRecipes}></Recipes>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Section")
      .map(t => {
        return <Section key="Section" data={data.contentfulSection}></Section>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Blogs")
      .map(t => {
        return <Blogs key="Blogs" data={data.allContentfulBlogs}></Blogs>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Extrasection")
      .map(t => {
        return <Extrasection key="Extrasection" data={data.contentfulExtrasection}></Extrasection>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Photos")
      .map(t => {
        return <Photos key="Photos" data={data.contentfulPhotos}></Photos>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Lastsection")
      .map(t => {
        return <Lastsection key="Lastsection" data={data.contentfulLastsection}></Lastsection>;
      })}

    {data.contentfulSiteInformation.menus
      .filter(item => item === "Contact")
      .map(t => {
        return <Contact key="Contact" data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      realName
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      id
      instagram
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
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
      bannerList
    }
    contentfulSection {
      sectionTitle
      sectionText {
        sectionText
      }
    }
    contentfulExtrasection {
      title,
        childContentfulExtrasectionExtrasectionTextTextNode {
          extrasectionText
        }
    }
    contentfulLastsection {
      title,
      childContentfulLastsectionDescriptionTextNode {
        description
      }
    }
    allContentfulBlogs(limit: 5, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt(fromNow: true)
        }
      }
    }
    allContentfulRecipes(limit: 5, sort: {fields: createdAt, order: DESC}) {
      edges {
        node {
          title
          slug
          category
          origin
          tags
          diet
          duration
          difficulty
          image {
            fluid(maxWidth: 600) {
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
        }
      }
    }
    contentfulPhotos {
      photos {
        fluid(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
