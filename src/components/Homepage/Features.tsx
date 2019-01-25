import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography, Theme } from "@material-ui/core";
import { FEATURE_DATA } from "../../data/rawData";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white
  },
  container: {
    width: "70%",
    margin: "0 auto",
    paddingBottom: "80px"
  },
  paper: {
    padding: `20px 8px`,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0px 3px 8px #d2d2d2"
  },
  subheading: {
    marginBottom: theme.spacing.unit * 2,
    fontSize: "1.1em",
    fontWeight: "500"
  },
  heading: {
    fontSize: "2em",
    textAlign: "center",
    padding: "50px 0"
  }
});

function Features(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.heading}>What we provide</Typography>
        <Grid container spacing={40}>
          {FEATURE_DATA.map((feature, index) => (
            <Grid item xs={12} lg={4} md={4} key={index}>
              <div className={classes.paper}>
                <Typography className={classes.subheading}>
                  {feature.name}
                </Typography>
                <img src={feature.imgSrc} alt="Feature Image" />
                <div>{feature.content}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Features);
