import React from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";

const Card = (props:any) => {
    const { 
        active, 
        row, 
        column, 
        setActiveCard, 
        index, 
        reachable,
        complete
     } = props;

    const useStyles = makeStyles(theme => ({
        paperRoot: {
          backgroundColor: reachable || active ? "default" :"lightgray"
        }
      }));

      const classes = useStyles();
  
    return(
        <Grid item className={`gridCard ${active == true ? "active" : ""} ${complete ? "complete" : ""}`} onClick={() => {
            if(reachable) {setActiveCard(index, row, column)}
        }}
        >
            <Paper className={`card ${reachable ? "reachable" : "unreachable"}`} elevation={12}  classes={{ root: classes.paperRoot }}>
                {index}
                <br></br>
                {row}
                <br></br>
                {column}
            </Paper>
        </Grid>
    )
}

export default Card;