import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default ({ data }) => {
  console.log("my-files data", data);
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>relativePath</TableCell>
                <TableCell>prettySize</TableCell>
                <TableCell>extension</TableCell>
                <TableCell>birthTime</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.allFile.edges.map(({ node }, index) => (
                <TableRow key={index}>
                  <TableCell>{node.relativePath}</TableCell>
                  <TableCell>{node.prettySize}</TableCell>
                  <TableCell>{node.extension}</TableCell>
                  <TableCell>{node.birthTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
