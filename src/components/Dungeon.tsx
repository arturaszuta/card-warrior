import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import Card from "./Card";

interface IDungeonProps {
    size: string;
  }


const Dungeon = (props:IDungeonProps) => {
    const { size } = props;
    let sizeCount = 0;
    const [mainState, setMainState] = useState({activeIndex: -1});

    const BuildDungeon = (size: string) => {
        switch(size) {
            case "small":
                sizeCount = 50;
            break;
        }
    }
    
    const setActiveIndex = (index: number) => {
        setMainState({...mainState, activeIndex: index});
    }

    const getRow = (index: number) => {
        let row = 0;
        const dividedIndex = index / 5;
        if(dividedIndex < 1) {
            row = 1;
        } else 
        if(dividedIndex >= 1 && dividedIndex < 2) {
            row = 2;
        }
        if(dividedIndex >= 2 && dividedIndex < 3) {
            row = 3;
        }
        if(dividedIndex >= 3 && dividedIndex < 4) {
            row = 4;
        }
        if(dividedIndex >= 4 && dividedIndex < 5) {
            row = 5;
        }
        if(dividedIndex >= 5 && dividedIndex < 6) {
            row = 6;
        }
        if(dividedIndex >= 6 && dividedIndex < 7) {
            row = 7;
        }
        if(dividedIndex >= 7 && dividedIndex < 8) {
            row = 8;
        }
        if(dividedIndex >= 8 && dividedIndex < 9) {
            row = 9;
        }
        if(dividedIndex >= 9 && dividedIndex < 10) {
            row = 10;
        }
        return row;
    }

    BuildDungeon(size);


    const cardArray = Array.from(Array(sizeCount).keys());
    const allCards = cardArray.map((e, index) => {
        const row = getRow(index);
        return <Card key={index} index={index} active={mainState.activeIndex == index ? true : false} setActiveIndex={setActiveIndex} row={row}/>
    })

    return(
        <Grid className="dungeon-wrapper" spacing={2} container>
            {allCards}
        </Grid>
    )

}

export default Dungeon;