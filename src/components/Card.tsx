import React from "react";
import { Paper, Grid, makeStyles } from "@material-ui/core";

const Card = (props:any) => {
    const { 
        active, 
        row, 
        column, 
        // setActiveIndex, 
        // setActiveRow, 
        // setActiveColumn,
        setActiveCard, 
        index, 
        reachable } = props;

    const useStyles = makeStyles(theme => ({
        paperRoot: {
          backgroundColor: reachable ? "default" :"lightgray"
        }
      }));

      const classes = useStyles();
  
    return(
        <Grid item className={`gridCard ${active == true ? "active" : ""}`} onClick={() => {
            // setActiveIndex(index);
            // setActiveRow(row);
            // setActiveColumn(column)
            setActiveCard(index, row, column);
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