import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Theme } from "@material-ui/core";
import { PROJECT_DATA } from "../../data/rawData";
import { FaHeart, FaArrowRight } from "react-icons/fa";
import Project from "./Project";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: "70%",
    margin: "0 auto"
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    boxShadow: "0px 3px 8px #d2d2d2"
  },
  subheading: {
    marginBottom: theme.spacing.unit * 5,
    textAlign: "center",
    fontSize: "1.2em",
    fontWeight: "400"
  },
  heading: {
    fontSize: "2em",
    textAlign: "center",
    padding: "50px 0 10px 0"
  },
  btnPrimary: {
    border: "none",
    backgroundColor: "rgb(68, 68, 68)",
    padding: "10px 30px",
    borderRadius: "100px",
    color: theme.palette.common.white,
    fontSize: "1em",
    marginRight: "40px",
    cursor: "pointer"
  }
});

const projectOrderflip = {
  display: "flex",
  flexDirection: "row-reverse"
};
function Projects(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.heading}>Our Projects</Typography>
        <Typography className={classes.subheading}>
          Made with <FaHeart color="#de0000" /> by our awesome team
        </Typography>
        {PROJECT_DATA.map((project, index) => (
          <Project
            key={index}
            {...project}
            flip={index % 2 == 0}
            styleObj={projectOrderflip}
          />
        ))}
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <button className={classes.btnPrimary}>
            VIEW ALL <FaArrowRight style={{ verticalAlign: "bottom" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Projects);
