import React from "react";

interface GameMenuProps {
    
}

const GameMenu = (props: any) => {
    return(
        <div>
            <p onClick={props.moveDown}>New Game</p>
            <br />
            Continue Game
            
        </div>
    )
}

export default GameMenu;