import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { FaDelicious } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../data/rawData";

const styles = (theme: Theme): any => ({
  root: {
    width: "100%",
    position: "sticky",
    top: "0",
    zIndex: "1"
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  logoIcon: {
    fontSize: "2em",
    color: theme.palette.common.white
  },
  logo: {
    color: theme.palette.common.white,
    fontWeight: "500",
    letterSpacing: "8px",
    fontSize: "1.1em",
    marginLeft: "10px"
  },
  link: {
    color: theme.palette.common.white,
    marginRight: "25px",
    cursor: "pointer"
  },
  linkMob: {
    color: theme.palette.common.black,
    marginRight: "25px",
    cursor: "pointer"
  },
  navDivider: {
    color: theme.palette.common.white,
    margin: "0 30px"
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
  }
});

interface Props {
  classes: any;
  contactSectionRef: any;
}

interface State {
  anchorEl: null;
  mobileMoreAnchorEl: null;
  active: String;
}

class Header extends React.Component<Props, State> {
  state: State = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    active: "home"
  };

  scrollToContact = () => {
    window.scrollTo(0, this.props.contactSectionRef.current.offsetTop);
  };

  handleMobileMenuOpen = (event: any) => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        {NAV_ITEMS.map((item, index) => (
          <MenuItem key={index}>
            <Typography
              key={index}
              className={`${classes.linkMob} ${
                active == item.id ? classes.active : ""
              }`}
            >
              {item.name}
            </Typography>
          </MenuItem>
        ))}
        <MenuItem>
          <Typography
            className={classes.linkMob}
            onClick={this.scrollToContact}
          >
            CONTACT
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography className={classes.linkMob}>PORTFOLIO</Typography>
        </MenuItem>
      </Menu>
    );
    const { active } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#444", boxShadow: "none" }}
        >
          <Toolbar>
            <FaDelicious className={classes.logoIcon} />
            <Typography className={classes.logo}>Kiehn PLC </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {NAV_ITEMS.map((item, index) => (
                <Link to={item.to}>
                  <Typography
                    key={index}
                    className={`${classes.link} ${
                      active == item.id ? classes.active : ""
                    }`}
                    onClick={() => this.setState({ active: item.id })}
                  >
                    {item.name}
                  </Typography>
                </Link>
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
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

export default withStyles(styles)(Header);
