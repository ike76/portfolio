import React from "react";
import Layout from "../components/layout";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
export default () => (
  <Layout>
    <Helmet>
      <title>wuzzup</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Helmet>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
