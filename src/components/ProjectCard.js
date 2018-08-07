import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import homeCompImage from "../images/projects/homecomp.jpg";
import Img from "gatsby-image";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const ProjectCard = props => {
  const { classes, dangerHTML } = props;
  const { title, date, link_live, link_repo } = props.frontmatter;

  return (
    <Card className={classes.card}>
      <Img sizes={props.frontmatter.featuredImage.childImageSharp.sizes} />

      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: dangerHTML }}
        />
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(ProjectCard);
