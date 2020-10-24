import React from "react";
import { Paper, Grid } from "@material-ui/core";

const Card = (props:any) => {
    console.log(props)
  
    return(
        <Grid item className="gridCard" onClick={() => {console.log("stop it!")}}>
            <Paper className="card" elevation={12}  >
                {props.index}
            </Paper>
        </Grid>
    )
}

export default Card;