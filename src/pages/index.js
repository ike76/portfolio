import React from "react";
import Layout from "../components/layout";
import Header from "../components/Header";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
export default () => <Layout />;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
