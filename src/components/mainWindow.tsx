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