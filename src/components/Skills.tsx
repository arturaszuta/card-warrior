import React from "react";
import { Container, Paper, Grid } from "@material-ui/core";

const Skills = () => {

    return(
        <Container className="skillsContainer">
            <Paper className="statsPaper" elevation={16}>
                <Grid container className="statsGrid" spacing={2}>
                    <p>Skills here!</p>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Skills;