import React from "react"
import { Grid } from "@material-ui/core"
import  "../CSS/cards.css"

const StatsCard = () => {
    return(
        <Grid item className="statsCard">
            <div className="stats-card-start">a</div>
            <div className="stats-card-icon">b</div>
            <div className="stats-card-text">c</div>
        </Grid>
    )
}

export default StatsCard