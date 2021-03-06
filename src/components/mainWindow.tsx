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
// Comments
// more comments
//MORE COMMENTS
export default connect(
    mapStateToProps,
  )(MainWindow)