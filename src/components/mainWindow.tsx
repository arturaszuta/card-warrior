import React from "react";
import { connect } from 'react-redux';

const MainWindow = (props: any) => {
    console.log(props);
    return(
        <div>
            I'm the main window!
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