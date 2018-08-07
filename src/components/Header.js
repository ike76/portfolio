import React from "react";
import styled from "styled-components";
import ikeWorksLogo from "../images/ikeworks.logo.white.png";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  root: {
    flexGrow: 1
  }
};

const Header = props => {
  return (
    <AppBar style={{ border: "2px white solid" }} position="static">
      <Toolbar>
        <img src={ikeWorksLogo} alt="" style={{ height: "100px" }} />
        <Typography variant="title">Brian Eichenberger</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
