import React from "react";
// import { graphql } from "gatsby";
import Layout from "../components/layout";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "../components/ProjectCard";
import Grid from "@material-ui/core/Grid";

export default ({ data }) => {
  console.log("projects data", data);
  return (
    <Layout>
      <Typography
        align="center"
        variant="title"
        gutterBottom
        style={{ margin: "1rem" }}
      >
        PROJECTS
      </Typography>
      <Grid container>
        {data.allMarkdownRemark.edges.map(edge => {
          const { node: project } = edge;
          const { html } = project;
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard
                frontmatter={project.frontmatter}
                dangerHTML={html}
              />
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            link_live
            link_repo
            techUsed
            projectFor
            synopsis1
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
