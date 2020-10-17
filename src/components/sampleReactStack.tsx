import React, { Component } from "react";
import StackGrid from "react-stack-grid";

const SampleStack = () => {
    return (
      <StackGrid
        columnWidth={150}
      >
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
      </StackGrid>
    );
  }


  export default SampleStack