import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default ({ children, data }) => {
  return (
    <Container container>
      <Header />

      {children}
    </Container>
  );
};
