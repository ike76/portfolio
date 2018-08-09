import React from "react";
import { Link } from "gatsby";
import ikeWorksLogo from "../images/ikeworks.logo.white.png";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "white"
  }
};

const Header = props => {
  return (
    <AppBar
      style={{ border: "2px white solid", borderRadius: "2rem" }}
      position="static"
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link to="/">
          <img src={ikeWorksLogo} alt="" style={{ height: "80px" }} />
        </Link>
        <div>
          <Button component={Link} to="/projects" color="inherit">
            PROJECTS
          </Button>
          <Button component={Link} to="/bio" color="inherit">
            BIO
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
