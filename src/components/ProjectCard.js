import React from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
      <Img
        fadeIn
        sizes={props.frontmatter.featuredImage.childImageSharp.sizes}
        className={classes.media}
      />

      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography
          component="div"
          dangerouslySetInnerHTML={{ __html: dangerHTML }}
        />
      </CardContent>
      <CardActions>
        <Button
          href={link_live}
          target="_blank"
          size="small"
          color="primary"
          variant="contained"
        >
          Live
        </Button>
        <Button
          href={link_repo}
          target="_blank"
          size="small"
          variant="outlined"
        >
          Repo
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(ProjectCard);
