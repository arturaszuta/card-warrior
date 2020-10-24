import React from "react";
import  styled  from "styled-components";
import { Paper, Grid } from "@material-ui/core";

const Card = () => {

    const CardStyle = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    border: 1px solid black;
    height: 100px;
    width: 20%;
  `;
  
    return(
        <Grid item className="gridCard">
            <Paper className="card" elevation={12}>
                I'm a card!
            </Paper>
        </Grid>
    )
}

export default Card;