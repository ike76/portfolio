import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";

import moment from "moment";

import GithubCircle from "mdi-material-ui/GithubCircle";
import TechArray from "./TechArray";

import Img from "gatsby-image";
const styles = theme => ({
  card: {
    // maxWidth: 250,
    margin: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardActions: {
    width: "100%",
    textAlign: "center"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class ProjectCard extends Component {
  state = {
    expanded: false
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render = () => {
    const { classes, dangerHTML } = this.props;
    const {
      title,
      date,
      link_live,
      link_repo,
      techUsed,
      projectFor,
      synopsis1
    } = this.props.frontmatter;
    const techArray = techUsed.split(" ");
    return (
      <Card className={classes.card} style={{ position: "relative" }}>
        <CardHeader title={title} subheader={moment(date).format("MMM YYYY")} />
        <a href={link_live} target="_blank" rel="noopener noreferrer">
          <Img
            fadeIn
            sizes={this.props.frontmatter.featuredImage.childImageSharp.sizes}
            className={classes.media}
          />
        </a>
        <TechArray techArray={techArray} />
        <CardContent>
          <Typography variant="body2">{projectFor}</Typography>
          <Typography variant="body1">{synopsis1}</Typography>
        </CardContent>

        <CardActions
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            href={link_live}
            target="_blank"
            size="small"
            color="primary"
            variant="contained"
          >
            Live
          </Button>
          <IconButton href={link_repo} target="_blank">
            <GithubCircle />
          </IconButton>

          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: dangerHTML }}
            />
          </CardContent>
        </Collapse>
      </Card>
    );
  };
}

export default withStyles(styles)(ProjectCard);
