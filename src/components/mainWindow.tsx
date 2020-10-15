import React from "react";
import { connect } from 'react-redux';
import GameMenu from "./GameMenu";
import ReactFullPage from "@fullpage/react-fullpage";
import GameCard from "./GameCard";
import BarGraph from "./BarGraph";




const MainWindow = (props: any) => {
    const  doMagic = (fullpageApi: any) => {
        fullpageApi.silentMoveTo(1)
        // return <div className="section">Oh lalala</div>
    }



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
                    <div className="slide cardArea">
                        <button onClick={() => fullpageApi.moveSlideRight()}>Go to game area</button>
                            <div className="cardAreaWrapper">
                                <div className="heroWrapper">
                                    <BarGraph />
                                    <GameCard />
                                </div>
                                <div className="cardWrapper">
                                    <GameCard />
                                    <GameCard />
                                    <GameCard />
                                </div>
                            </div>
                    </div>
                    <div className="slide">
                        <button onClick={() => fullpageApi.moveSlideLeft()}>Go to staging area</button>
                        Game Area
                    </div>
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