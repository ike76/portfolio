import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import styled from "styled-components";
import Layout from "../components/layout";
import beforeGoogle from "../images/Before-Google-Damn-Shame.jpg";
import brianImage from "../images/brian-headshot.jpg";
const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: end;
  margin: 1rem;
`;

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 100,
    height: 100
  }
};

const PictureDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`;

const Bio = ({ classes }) => {
  return (
    <Layout>
      <Paper
        style={{
          width: "80%",
          margin: "1rem auto",
          padding: "1rem"
        }}
      >
        <PictureDiv style={{ width: "100%", textAlign: "center" }}>
          <Avatar
            alt="Brian Eichenberger"
            src={brianImage}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </PictureDiv>
        <Typography variant="title" gutterBottom>
          Hi. I'm Brian.
        </Typography>
        <Typography component="p" gutterBottom>
          I'm a fullstack developer, problem solver, tinkerer, music-maker and a
          recent graduate of the{" "}
          <a href="https://www.thinkful.com/bootcamp/web-development/flexible/">
            Full Stack Web Development
          </a>{" "}
          program at{" "}
          <a href="https://www.thinkful.com" target="blank">
            Thinkful
          </a>.
        </Typography>
        <Typography component="p" gutterBottom>
          After spending most of my adult life as a touring musician, (<em>
            The Beach Boys, Brian Wilson, The Four Freshmen
          </em>) I've found the most satisfaction leveraging tech to solve
          interesting problems.
        </Typography>
        <Typography component="p">
          My projects thus far have been attempts to create simple
          <em> tools I wished I had:</em>
        </Typography>

        <Typography component="p" gutterBottom>
          Booking flights, coordinating travel, keeping track of where in the
          world we are today.
        </Typography>
      </Paper>
      <CardDiv>
        <Card style={{ width: "310px", textAlign: "center" }} align="center">
          <img src={beforeGoogle} alt="before google" width="300px" />
        </Card>
      </CardDiv>
    </Layout>
  );
};

export default withStyles(styles)(Bio);
