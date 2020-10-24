import React from "react";
import { Paper, Grid } from "@material-ui/core";

const Card = (props:any) => {
    const { active } = props;
  
    return(
        <Grid item className={`gridCard ${props.active == true ? "active" : ""}`} onClick={() => {props.setActiveIndex(props.index)}}>
            <Paper className="card" elevation={12}  >
                {props.index}
                <br></br>
                {props.row}
            </Paper>
        </Grid>
    )
}

export default Card;