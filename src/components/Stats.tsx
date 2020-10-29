import React from "react"
import { Container, Paper, Grid } from "@material-ui/core"
import StatsCard from "./StatsCard";

import { HeartIcon } from "../icons/icons";
import { ShieldIcon } from "../icons/icons";
import { SwordIcon } from "../icons/icons";

const Stats = () => {
    return(
        <Container className="statsContainer">
            <Paper className="statsPaper" elevation={16}>
                <Grid container className="statsGrid" spacing={2}>
                    <StatsCard text={"health"} icon={HeartIcon} data={{some: "data"}}/>
                    <StatsCard text={"attack"} icon={SwordIcon} data={{some: "data"}}/>
                    <StatsCard text={"defenses"} icon={ShieldIcon} data={{some: "data"}}/>
                    {/* <StatsCard text={"something"} icon={"icon"} data={{some: "data"}}/> */}
                </Grid>
            </Paper>
        </Container>
    )
}

export default Stats;