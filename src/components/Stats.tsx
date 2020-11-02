import React from "react"
import { Container, Paper, Grid } from "@material-ui/core"
import StatsCard from "./StatsCard";

import { HeartIcon } from "../icons/icons";
import { ShieldIcon } from "../icons/icons";
import { SwordIcon } from "../icons/icons";



const Stats = () => {

    const sampleHealthData = {
        hp: 20,
        maxhp: 20,
        regen: 0
    }

    const sampleAttackData = {
        baseDmg: 5,
        accuracy: 80,
        critchance: 5,
        critmulti: 1.5
    }

    const sampleDefenseData = {
        physresist: 10,
        magicresist: 10,
        dodge: 10
    }

    return(
        <Container className="statsContainer">
            <Paper className="statsPaper" elevation={16}>
                <Grid container className="statsGrid" spacing={2}>
                    <StatsCard text={"health"} icon={HeartIcon} data={sampleHealthData} type="hp"/>
                    <StatsCard text={"attack"} icon={SwordIcon} data={sampleAttackData} type="dmg"/>
                    <StatsCard text={"defenses"} icon={ShieldIcon} data={sampleDefenseData} type="def"/>
                    {/* <StatsCard text={"something"} icon={"icon"} data={{some: "data"}}/> */}
                </Grid>
            </Paper>
        </Container>
    )
}

export default Stats;