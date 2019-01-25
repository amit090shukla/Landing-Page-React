import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Hidden } from "@material-ui/core";
import FAQIcon from "../../assets/FAQ.svg";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FAQ_DATA } from "../../data/rawData";

const styles = (theme: any): any => ({
  container: {
    width: "70%",
    margin: "0 auto",
    marginBottom: "50px",
    flexGrow: 1
  },
  heading: {
    fontSize: "2em",
    textAlign: "center",
    padding: "50px 0 50px 0"
  },
  expansionheading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
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
    fontSize: "2em",
    color: "#D79922"
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

function FAQ(props: any) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography className={classes.heading}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={40}>
        <Hidden smDown={true}>
          <Grid item xs={4}>
            <img
              src={FAQIcon}
              alt="Contact Illustration"
              className="full-width"
            />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={8}>
          {FAQ_DATA.map(({ question, answer }, index) => (
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.expansionheading}>
                  {question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ backgroundColor: "#0078d7" }}>
                <Typography style={{ color: "#fff" }}>{answer}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(FAQ);
