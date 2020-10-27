import React from "react";
import { connect } from 'react-redux';
import GameMenu from "./GameMenu";
import ReactFullPage from "@fullpage/react-fullpage";
import GameCard from "./GameCard";
import SampleStack from "./sampleReactStack";
import SizedContainer from "./SizedContainer";
import { Container, Grid } from "@material-ui/core";
import  Dungeon  from "./Dungeon";
import Character from "./CharacterTab";




const MainWindow = (props: any) => {
    const  doMagic = (fullpageApi: any) => {
        fullpageApi.silentMoveTo(1)
        // return <div className="section">Oh lalala</div>
    }





    return(
        // <ReactFullPage
        //     //fullpage options
        //     licenseKey = {'YOUR_KEY_HERE'}
        //     scrollingSpeed = {1000} /* Options here */

        //     render={({ state, fullpageApi }) => {
        //     return (
        //         <ReactFullPage.Wrapper>
        //         <div className="section">
        //             <GameMenu moveDown={() => {fullpageApi.moveSectionDown(); fullpageApi.setAllowScrolling(false, 'up'); fullpageApi.setKeyboardScrolling(false);}}/>
        //         </div>
        //         <div className="section">
        //             <div className="slide cardArea">
        //                 <button onClick={() => fullpageApi.moveSlideRight()}>Go to game area</button>
        //                 <button onClick={() => fullpageApi.moveSectionDown()}>Go to game area</button>
        //                     <div className="cardAreaWrapper">
        //                         <SizedContainer>
        //                         </SizedContainer>
        //                             {/* <SampleStack /> */}
        //                     </div>
        //             </div>
        //             <div className="slide">
        //                 <button onClick={() => fullpageApi.moveSlideLeft()}>Go to staging area</button>
        //                 Game Area
        //             </div>
        //         </div>
        //         {/* <div className="section">
        //             This is section?
        //         </div> */}

        //         </ReactFullPage.Wrapper>
        //     );
        //     }}
        // />
        <div className="mainWrapper">
                <Container className="characterTab" >
                    <Character />
                </Container>
                <Container className="main-game-container" maxWidth="lg" style={{ width: "160%"}}>
                    <Dungeon size="small" />
                </Container>
                <Container className="extraTab" >
                </Container>
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