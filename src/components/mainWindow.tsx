import React from "react";
import { connect } from 'react-redux';
import GameMenu from "./GameMenu";

const MainWindow = (props: any) => {
    console.log(props);
    return(
        <div>
            <GameMenu />
        </div>
    )
}

const mapStateToProps = (state: any /*, ownProps*/) => {
    return {
        sayHello: state
    }
}

export default connect(
    mapStateToProps,
  )(MainWindow)