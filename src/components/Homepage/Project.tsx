import * as React from "react";
import { Grid, Typography, Theme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing.unit * 2} 0`
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
  desc: {
    marginBottom: theme.spacing.unit * 2,
    textAlign: "left",
    fontSize: "1em",
    fontWeight: "400"
  },
  date: {
    textAlign: "left"
  },
  heading: {
    fontSize: "1.2em",
    textAlign: "left",
    fontWeight: "600",
    padding: "20px 0 10px 0"
  },
  projectContainer: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      borderBottom: "1px solid #d2d2d2",
      marginBottom: "30px"
    }
  }
});

function Project(props: any) {
  const { classes, name, date, description, imgUrl, flip, styleObj } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={40}
        style={flip ? styleObj : {}}
        className={classes.projectContainer}
      >
        <>
          <Grid item xs={12} sm={6} lg={6}>
            <div>
              <img src={imgUrl} alt="product image" className="full-width" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <div>
              <Typography className={classes.heading}>{name}</Typography>
              <Typography className={classes.date}>{date}</Typography>
              <Typography className={classes.desc}>{description}</Typography>
            </div>
          </Grid>
        </>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Project);
