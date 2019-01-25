import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Hidden, Theme } from "@material-ui/core";
import ContactIcon from "../../assets/Contact.svg";
import {
  FaYoutubeSquare,
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare
} from "react-icons/fa";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white
  },
  container: {
    width: "70%",
    margin: "0 auto"
  },
  heading: {
    fontSize: "2em",
    textAlign: "center",
    padding: "50px 0 50px 0"
  },
  desc: {
    fontSize: "1.1em",
    marginBottom: "30px"
  },
  label: {
    fontSize: "0.9em",
    fontWeight: "400",
    color: "#777"
  },
  icon: {
    marginRight: "30px",
    fontSize: "2em"
    // color: "#D79922"
  },
  data: {
    fontSize: "1em",
    fontWeight: "500",
    marginBottom: "15px"
  },
  iconContainer: {
    margin: "30px 0"
  }
});
interface Props {
  classes: any;
}
class Contact extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography className={classes.heading}>Let's have a talk</Typography>
          <Grid container spacing={40}>
            <Grid item xs={12} md={6}>
              <div>
                <Typography className={classes.desc}>
                  Feel free to get in touch with us. We are always open to
                  discussing new projects, creative ideas and be a part of your
                  vision
                </Typography>
                <Typography className={classes.label}>Need help</Typography>
                <Typography className={classes.data}>
                  amit090shukla@gmail.com
                </Typography>
                <Typography className={classes.label}>
                  Feel like talking
                </Typography>
                <Typography className={classes.data}>+91-7976638856</Typography>
                <div>
                  <FaLinkedin className={classes.icon} color="#0077b5" />
                  <FaYoutubeSquare className={classes.icon} color="#ff0000" />
                  <FaFacebook className={classes.icon} color="#3b5998" />
                  <FaTwitterSquare className={classes.icon} color="#1da1f2" />
                </div>
              </div>
            </Grid>
            <Hidden smDown={true}>
              <Grid item xs={12} md={6}>
                <div className={classes.iconContainer}>
                  <img
                    src={ContactIcon}
                    alt="Contact Illustration"
                    style={{ width: "100%" }}
                  />
                </div>
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
