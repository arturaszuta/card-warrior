import React from "react"
import {useSpring, animated, config} from 'react-spring'

const GameCard = () => {

    const spring = useSpring({
        from: {
          transform: `translate(0px)`,
        },
        to: {
          transform: `translate(120px)`,
        },
        config: {
          mass: 6,
        },
      });
    return(<animated.div style={spring} className="gameCardContainer">
        This is a card!
    </animated.div>)
}

export default GameCard