import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

export default () => {
  return (
    <Layout>
      <h2 style={{ marginTop: "6rem" }}>projects</h2>
      <ProjectCard />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
