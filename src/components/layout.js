import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Header from "./Header";
import { Helmet } from "react-helmet";
import theme from "../themes/default";
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default ({ children, data }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <title>wuzzup</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Helmet>

      <Container container>
        <Header />

        {children}
      </Container>
    </MuiThemeProvider>
  );
};
