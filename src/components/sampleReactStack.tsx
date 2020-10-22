import React, { Component } from "react";
import StackGrid from "react-stack-grid";
import styled from "styled-components";
import { SizeMe } from "react-sizeme";


// function MyApp() {
//     return <SizeMe>{({ size }) => <div>My width is {size.width}px</div>}</SizeMe>
//   }

const SampleStack = (props:any) => {

    const { containerWidth } =  props;
    const width = containerWidth / 10;
    console.log("THIS IS WIDTH",Math.ceil(width))

    const Card = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  border: 1px solid black;
  height: 100px;
  width: ${width}px;
`;

    
const cardArray = Array.from(Array(81).keys())
const allCards = cardArray.map(e => <Card />)
           
    return (
      <StackGrid
        columnWidth={150}
        >
          {allCards}
      </StackGrid>
    );
  }



  export default SampleStack