import React from "react"
import { Container, Paper, Grid } from "@material-ui/core"
import StatsCard from "./StatsCard";

const Stats = () => {
    return(
        <Container className="statsContainer">
            <Paper className="statsPaper" elevation={16}>
                <Grid container className="statsGrid" spacing={2}>
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                    <StatsCard />
                </Grid>
            </Paper>
        </Container>
    )
}

export default Stats;