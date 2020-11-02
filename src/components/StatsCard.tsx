import React from "react"
import { Grid, SvgIcon } from "@material-ui/core"
import  "../CSS/cards.css"

const StatsCard = (props:any) => {

    const { text, icon } = props;
    return(
        <Grid item className="statsCard">
            <div className="stats-card-start">{text}</div>
            <div className="stats-card-icon">{icon}</div>
            <div className="stats-card-text"></div>
        </Grid>
    )
}

export default StatsCard