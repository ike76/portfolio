import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const BizCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  width: 300px;
  background: lightgrey;
`;

const WordDiv = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  grid-column: 2;
`;

const Word = ({ size, darkness, children }) => (
  <WordDiv style={{ fontSize: size, opacity: darkness / 100 }}>
    {children}
  </WordDiv>
);

export default class HomePage extends Component {
  render() {
    return (
      <BizCardGrid>
        <WordDiv size={"5rem"} darkness={90}>
          BRIAN
        </WordDiv>
        <Word size={33} darkness={60}>
          EICHENBERGER
        </Word>
        <WordDiv>hey</WordDiv>
        <WordDiv>hey</WordDiv>
        <WordDiv>hey</WordDiv>
      </BizCardGrid>
    );
  }
}
