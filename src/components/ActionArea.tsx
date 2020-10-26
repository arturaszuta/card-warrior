import React from "react";

import { Button } from "@material-ui/core";

const ActionArea = (props: any) => {
    return(
        <div className={`action-wrapper ${props.hidden ? "" : "hidden"}`}>
            <Button onClick={() => {props.closeActionArea()}}>Close Action Window</Button>
        </div>
    )
}

export default ActionArea;