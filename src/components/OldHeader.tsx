import { Grid, Typography } from "@material-ui/core";
import { Theme, withStyles } from "@material-ui/core/styles";
import React from "react";
import { FaDelicious } from "react-icons/fa";
import { NAV_ITEMS } from "../data/rawData";

const styles = (theme: Theme): any => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#444",
    height: "70px",
    position: "sticky",
    top: "0px"
  },
  container: {
    width: "90%",
    margin: "0 auto",
    padding: "20px 0"
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: "500",
    letterSpacing: "8px",
    fontSize: "1.1em",
    marginLeft: "10px"
  },
  link: {
    color: "#fff",
    marginRight: "25px",
    cursor: "pointer"
  },
  btnPrimary: {
    border: "none",
    backgroundColor: "#D79922",
    padding: "6px 20px",
    borderRadius: "100px",
    color: theme.palette.common.white,
    fontSize: "0.9em",
    marginRight: "20px",
    cursor: "pointer"
  },
  btnSecondary: {
    backgroundColor: "transparent",
    padding: "6px 20px",
    borderRadius: "100px",
    color: "#D79922",
    fontSize: "0.9em",
    marginRight: "20px",
    border: "1px solid #D79922",
    cursor: "pointer"
  },
  active: {
    borderBottom: "1px solid #D79922"
  },
  logoIcon: {
    fontSize: "2em",
    color: theme.palette.common.white
  },
  navitemContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  navDivider: {
    color: theme.palette.common.white,
    margin: "0 30px"
  }
});

interface HeaderProps {
  classes: any;
  active: String;
  contactSectionRef: any;
}
class Header extends React.Component<HeaderProps> {
  scrollToContact = () => {
    window.scrollTo(0, this.props.contactSectionRef.current.offsetTop);
  };
  render() {
    const { classes, active } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={40}>
            <Grid item xs={4}>
              <div className="d-f c-a">
                <FaDelicious className={classes.logoIcon} />
                <Typography className={classes.logo}>Kiehn PLC </Typography>
              </div>
            </Grid>
            <Grid item xs={8}>
              <div className={classes.navitemContainer}>
                {NAV_ITEMS.map((item, index) => (
                  <Typography
                    key={index}
                    className={`${classes.link} ${
                      active == item.id ? classes.active : ""
                    }`}
                  >
                    {item.name}
                  </Typography>
                ))}
                <span className={classes.navDivider}> | </span>
                <button
                  className={classes.btnPrimary}
                  onClick={this.scrollToContact}
                >
                  CONTACT
                </button>
                <button className={classes.btnSecondary}>PORTFOLIO</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Header);
