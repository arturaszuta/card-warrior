import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Card from "./Card";
import { createBuilderStatusReporter } from "typescript";

interface IDungeon {
    size: string;
  }


const Dungeon = (props:IDungeon) => {
    const { size } = props;
    let sizeCount = 0;

    const BuildDungeon = (size: string) => {
        switch(size) {
            case "small":
                sizeCount = 50;
            break;
        }
    }

    const BuildState = (size: number) => {
        const tempArray = Array.from(Array(size).keys());
        const stateArray = tempArray.map((e, index) => {CardIndex: index + 1; Active: false})
        return stateArray;
    }

    BuildDungeon(size);
    const stateArray = BuildState(sizeCount);

    const [mainState, setMainState] = useState(stateArray);

    const cardArray = Array.from(Array(sizeCount).keys());
    const allCards = cardArray.map((e, index) => {return <Card key={index} index={index + 1} active={false}/>})

    return(
        <Grid className="dungeon-wrapper" spacing={2} container>
            {allCards}
        </Grid>
    )
}

export default Dungeon;