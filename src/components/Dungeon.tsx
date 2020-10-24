import React from "react";
import { Container } from "@material-ui/core";
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
        <Container className="dungeon-wrapper" maxWidth="md">
            <p>Badass dungeon!</p>
            {allCards}
        </Container>
    )
}

export default Dungeon;