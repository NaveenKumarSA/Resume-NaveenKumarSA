import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
/*   const bull = <span className={classes.bullet}>•</span>;
 */
  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5"  gutterBottom component="h2">
        Career Objective
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            I would like to work in a organisation where I can improve my skill that can be helpful for me as well as the organisation.
        </Typography>
        
      </CardContent>
    </Card>
  );
}
