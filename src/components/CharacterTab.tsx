import React from "react"
import { Container } from "@material-ui/core"

import Stats from "./Stats";
import Skills from "./Skills";

const Character = () => {
    return(
        <Container className="leftSidebar">
            <Stats />
            <Skills />
        </Container>
    )
}

export default Character;