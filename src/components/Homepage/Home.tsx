import { Grid, Theme, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#444444",
    height: "65vh",
    [theme.breakpoints.down("xs")]: {
      height: "95vh"
    }
  },
  container: {
    width: "70%",
    margin: "0 auto",
    padding: "100px 0 50px 0"
  },
  heading: {
    fontSize: "2em",
    color: theme.palette.common.white,
    textAlign: "center",
    marginBottom: "30px"
  },
  subheading: {
    color: theme.palette.common.white,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: "30px"
  },
  btnPrimary: {
    border: "none",
    backgroundColor: "#D79922",
    padding: "10px 30px",
    borderRadius: "100px",
    color: theme.palette.common.white,
    fontSize: "1.1em",
    cursor: "pointer",
    margin: "15px 20px"
  },
  btnSecondary: {
    backgroundColor: "transparent",
    padding: "10px 30px",
    borderRadius: "100px",
    color: "#D79922",
    fontSize: "1.1em",
    margin: "15px 20px",
    border: "1px solid #D79922",
    cursor: "pointer"
  },
  companyNameStyle: {
    fontSize: "1.2em",
    fontWeight: "600",
    background: "#D79922"
  }
});

function Home(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={40}>
          <Grid item xs={12}>
            <Typography className={classes.heading}>
              Something about{" "}
              <span className={classes.companyNameStyle}>Kiehn PLC</span>
            </Typography>
            <Typography className={classes.subheading}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              minus repellat labore qui dicta assumenda non. Non soluta at ipsam
              in tempora itaque vel eveniet magnam rem tenetur, quidem aliquid?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <button
                className={classes.btnPrimary}
                onClick={() =>
                  window.scrollTo(0, props.contactSectionRef.current.offsetTop)
                }
              >
                Let's talk
              </button>
              <button className={classes.btnSecondary}>See our work</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default withStyles(styles)(Home);
