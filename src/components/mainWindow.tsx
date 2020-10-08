import React from "react";
import { connect } from 'react-redux';
import GameMenu from "./GameMenu";
import ReactFullPage from "@fullpage/react-fullpage";

const MainWindow = (props: any) => {
    console.log(props);
    return(
        <ReactFullPage
            //fullpage options
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000} /* Options here */

            render={({ state, fullpageApi }) => {
            return (
                <ReactFullPage.Wrapper>
                <div className="section">
                    <GameMenu moveDown={() => {fullpageApi.moveSectionDown(); fullpageApi.setAllowScrolling(false, 'up'); fullpageApi.setKeyboardScrolling(false);}}/>
                </div>
                <div className="section">
                    <p>Section 2</p>
                </div>
                </ReactFullPage.Wrapper>
            );
            }}
        />
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