import React from "react";
import styled from "styled-components";
import HtmlIcon from "mdi-material-ui/LanguageHtml5";
import CssIcon from "mdi-material-ui/LanguageCss3";
import JSIcon from "mdi-material-ui/LanguageJavascript";
import ReactIcon from "mdi-material-ui/React";
import NodeIcon from "mdi-material-ui/Nodejs";
import HelpCircle from "mdi-material-ui/HelpCircle";
import Tooltip from "@material-ui/core/Tooltip";

const techIcons = {
  html: { component: <HtmlIcon />, tooltip: "Html" },
  css: { component: <CssIcon />, tooltip: "Css" },
  js: { component: <JSIcon />, tooltip: "JavaScript" },
  javascript: { component: <JSIcon />, tooltip: "JavaScript" },
  react: { component: <ReactIcon />, tooltip: "React" },
  node: { component: <NodeIcon />, tooltip: "Node" },
  missing: { component: <HelpCircle />, tooltip: "?" }
};

const TechDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 5px;
  color: #989898;
  & :hover {
    transition: all 0.5s;
      color: #525252;
    }
  }
`;

export default ({ techArray, style }) => {
  return (
    <TechDiv style={style}>
      {techArray.map(icon => (
        <Tooltip title={techIcons[icon].tooltip} placement="top">
          <div>{techIcons[icon].component}</div>
        </Tooltip>
      ))}
    </TechDiv>
  );
};
