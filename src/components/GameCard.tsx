import React from "react"
import {useSpring, animated, config} from 'react-spring'

const GameCard = () => {

    const styleProps = useSpring({
        from: { opacity: 0},
        to: {opacity: 1}
    });
    return(<animated.div style={styleProps} className="gameCardContainer">
        This is a card!
    </animated.div>)
}

export default GameCard