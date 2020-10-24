import React from "react";
import  styled  from "styled-components";
import { Paper } from "@material-ui/core";

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
        <Paper className="card">
            I'm a card!
        </Paper>
    )
}

export default Card;