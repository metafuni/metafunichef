import React from "react";

import Contact from "../components/contact";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ContactPage = () => (
    <Layout>
        <SEO
            title="Contact"
            keywords={[`Metafuni Chef`, `Italian`, `World`, `Cooking`, `Contact`]}
        />    
        <div className="site-container contact-page" style={{ padding: '0' }}>
            <div className="container text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Contact />
            </div>
        </div>
    </Layout>
);

export default ContactPage;
