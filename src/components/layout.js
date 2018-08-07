import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles'
import styled from "styled-components";
import Header from "./Header";
import theme from '../themes/default'
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default ({ children, data }) => {
  return (
    <MuiThemeProvider theme={theme}>

    <Container container>
      <Header />

      {children}
    </Container>
    </MuiThemeProvider>
  );
};
