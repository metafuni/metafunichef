import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="site-container not-found-page">
      <div className="container text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '73vh'}}>
        <h1>NOT FOUND</h1>
        <p>Oops, this page does not exist... </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
