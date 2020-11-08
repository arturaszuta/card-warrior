import React from "react"
import { Grid, SvgIcon } from "@material-ui/core"
import  "../CSS/cards.css"

const StatsCard = (props:any) => {

    const { text, icon, type, data } = props;

    const contentBuilder = (type: string, data: any) => {
        if (type == "hp") {
            return (
                [   <div className="hp-container"><div className="hp">{data.hp}</div>
                    <div className="max-hp">{data.maxhp}</div></div>,
                    <div>{data.regen}</div>,
                ]
            )
        }
        if (type == "dmg") {
            //do something
        }
        if (type == "def") {
            //do something
        }
    }

    return(
        <Grid item className="statsCard">
            <div className="stats-card-start">{text}</div>
            <div className="stats-card-icon">{icon}</div>
            <div className="stats-card-text">{contentBuilder(type, data)}</div>
        </Grid>
    )
}

export default StatsCard