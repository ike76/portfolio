import React from "react";
import Layout from "../components/layout";

import { graphql } from "gatsby";
export default () => (
  <Layout>
    <h1>this is the front page. it needs some stuff</h1>
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
