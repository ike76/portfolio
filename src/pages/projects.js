import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";

export default ({ data }) => {
  console.log("projects data", data);
  return (
    <Layout>
      <h2>projects</h2>
      {data.allMarkdownRemark.edges.map(edge => {
        const { node: project } = edge;
        const { title, date, link_live, link_repo } = project.frontmatter;
        const { html } = project;
        return (
          <ProjectCard frontmatter={project.frontmatter} dangerHTML={html} />
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            link_live
            link_repo
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
