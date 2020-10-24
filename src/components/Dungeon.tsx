import React from "react";
import { Container, Grid } from "@material-ui/core";
import Card from "./Card";

interface IDungeon {
    size: string;
  }


const Dungeon = (props:IDungeon) => {
    const { size } = props;
    let sizeCount;

    const BuildDungeon = (size: string) => {
        switch(size) {
            case "small":
                sizeCount = 50;
            break;
        }
    }

    BuildDungeon(size);

    const cardArray = Array.from(Array(sizeCount).keys());
    const allCards = cardArray.map(e => <Card key={e}/>)

    return(
        <Grid className="dungeon-wrapper" spacing={2} container>
            {allCards}
        </Grid>
    )
}

export default Dungeon;