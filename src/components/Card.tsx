import React from "react";
import { Paper, Grid } from "@material-ui/core";

const Card = (props:any) => {
    const { active, row, column, setActiveIndex, setActiveRow, setActivecolumn, index, reachable } = props;
  
    return(
        <Grid item className={`gridCard ${active == true ? "active" : ""}`} onClick={() => {setActiveIndex(index)}}>
            <Paper className={`card ${reachable ? "reachable" : "unreachable"}`} elevation={12}  >
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