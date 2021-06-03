import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";
import CookieConsent from "react-cookie-consent";

import "../css/style.css";
import "../css/font-awesome.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        contentfulSiteInformation {
          siteName
          siteDescription
          logo {
            file {
              url
            }
          }
          menus
        }
      }
    `}
    
    render={data => (
      <>
        <Header
          data={data.contentfulSiteInformation}
          siteTitle={data.contentfulSiteInformation.siteName}
          header={header}
        />
        <div>
          <main id="home">{children}</main>
        </div>
        <Footer siteName={data.contentfulSiteInformation.siteName} />
        <CookieConsent
        location="bottom"
        buttonText="Allow"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        style={{ background: "#333333b8", fontSize: "14px" }}
        buttonStyle={{ background: "#31af319c", borderRadius: ".2rem", color: "#fff", fontSize: "13px" }}
        declineButtonStyle={{ marginRight: ".1rem", background: "transparent", borderRadius: ".2rem", color: "#fff", fontSize: "13px", border: "1px solid #fff"}}
        enableDeclineButton
        expires={150} 
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ marginLeft: ".5rem" }}>See more information on the <Link className="link" style={{ color: '#32CD32' }} to="/privacy-policy">privacy policy</Link>.</span>
      </CookieConsent>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
