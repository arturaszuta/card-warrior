import React, { useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import { columnMatrix } from "../helpers/columnMatrix";
import ActionArea from "./ActionArea";

interface IDungeonProps {
    size: string;
  }


const Dungeon = (props:IDungeonProps) => {
    const { size } = props;
    let sizeCount = 0;
    const [mainState, setMainState] = useState({activeIndex: -1, activeRow: -1, activeColumn: -1, actionCardVisible: false, completeCardIndexes: [-1]});

    const BuildDungeon = (size: string) => {
        switch(size) {
            case "small":
                sizeCount = 50;
            break;
        }
    }
    
    const setActiveCard = (index: number, row: number, column: number) => {
        setMainState({...mainState, activeIndex: index, activeColumn: column, activeRow: row, actionCardVisible: true});
    }

    const closeActionArea = () => {
        const currentCompleteIndexes = [...mainState.completeCardIndexes];
        currentCompleteIndexes.push(mainState.activeIndex);
        setMainState({...mainState, actionCardVisible: false, completeCardIndexes: [...currentCompleteIndexes]});
    }

    const useStyles = makeStyles(theme => ({
        containerRoor: {
          backgroundColor: "lime"
        }
      }));

      const classes = useStyles();

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

    const getColumn = (index:number) => {
        const stringIndex = index.toString();
        return columnMatrix[stringIndex].val;
    }
 

    BuildDungeon(size);


    const cardArray = Array.from(Array(sizeCount).keys());
    const allCards = cardArray.map((e, index) => {
        const row = getRow(index);
        const column = getColumn(index);
        let reachable = false;
        if (mainState.activeIndex == -1 && row == 1) {
            reachable = true;
        } else if(row - mainState.activeRow == 1 && (column == mainState.activeColumn || column == mainState.activeColumn + 1 || column == mainState.activeColumn - 1) ) {
            reachable = true;
        }
        return (<Card 
            key={index} 
            index={index} 
            active={mainState.activeIndex == index ? true : false} 
            row={row} 
            column={column} 
            setActiveCard={setActiveCard}
            reachable={reachable}
            complete={mainState.completeCardIndexes.includes(index) ? true : false }

        />)
    })

    return(
        <Grid className="dungeon-wrapper" spacing={2} container>
            <ActionArea closeActionArea={closeActionArea} hidden={mainState.actionCardVisible}/>
            {allCards}
        </Grid>
    )

}

export default Dungeon;