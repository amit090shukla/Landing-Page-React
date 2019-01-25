import { Grid, Theme, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#444444"
  },
  container: {
    width: "70%",
    margin: "0 auto",
    padding: "50px 0"
  },
  companyLogo: {
    fontSize: "1.8em",
    fontWeight: "700",
    color: theme.palette.common.white,
    letterSpacing: "6px"
  },
  link: {
    color: theme.palette.common.white,
    marginBottom: "10px"
  }
});

function Footer(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={40}>
          <Grid item xs={12} md={4} lg={4}>
            <Typography className={classes.companyLogo}>Kiehn PLC	</Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div>
              <Typography className={classes.link}>Contact Us</Typography>
              <Typography className={classes.link}>Portfolio</Typography>
              <Typography className={classes.link}>Career</Typography>
              <Typography className={classes.link}>Home</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div>
              <Typography className={classes.link}>YouTube</Typography>
              <Typography className={classes.link}>Facebook</Typography>
              <Typography className={classes.link}>LinkedIn</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default withStyles(styles)(Footer);
