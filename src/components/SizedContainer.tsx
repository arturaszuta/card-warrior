import React from "react"
import { SizeMe } from "react-sizeme";
import SampleStack from "./sampleReactStack";

    function SizedContainer(props:any) {
        return <SizeMe>{({ size }) => <div><SampleStack containerWidth={size.width} containerHeight={size.height} /></div>}</SizeMe>
      }

export default SizedContainer;
