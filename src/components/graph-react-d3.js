import React from 'react';
import { Graph } from 'react-d3-graph';
import boxIcon from "../resources/box.svg";

// graph payload
const data = {
  nodes: [{ id: "Harry", svg: boxIcon, labelPosition: "top" }, { id: "Sally", symbolType: "square" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally", color: "blue", strokeDasharray: 5 },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration
const myConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: true,
  // width: 800,
  // height: 400,
  maxZoom: 8,
  minZoom: 0.1,
  // collapsible: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
    labelPosition: "right",
    symbolType: "star",
    // viewGenerator: node => { return(
    //   <div>
    //     <div>{node.label}</div>
    //     <div>2 devices=========</div>
    //   </div>
    // );}
  },
  link: {
    highlightColor: "lightblue",
    color: "red",
    // breakPoints: [{ x: 100, y: 20 }, { x: 20, y: 100 }],
    renderLabel: true,
  // labelProperty: (source, target) => (`${source.source} to ${source.target}`)
    labelProperty: (source, target) => (`Fiber - 150m - (-10db)`)
  },
  d3: {
    gravity: "-200",
    linkLength: "200",
  },
  // freezeAllDragEvents: false,
  // linkHighlightBehavior: true,
  // highlightDegree: 1,
  panAndZoom: true,
  focusZoom: 1,
  // staticGraphWithDragAndDrop: true,
  // staticGraph: true,
  directed: true
};

// const myConfig = {
//   nodeHighlightBehavior: true,
//   maxZoom: 3,
//   minZoom: 1,
//   node: {
//     color: "lightgreen",
//     size: 300,
//     highlightStrokeColor: "blue",

//     symbolType: "circle"
//   },
//   link: {
//     highlightColor: "lightblue",
//     renderLabel: true,
//     labelProperty: "source"
//   }
// };

// const myConfig = {
//   automaticRearrangeAfterDropNode: false,
//   collapsible: false,
//   height: 400,
//   highlightDegree: 1,
//   highlightOpacity: 0.2,
//   linkHighlightBehavior: true,
//   maxZoom: 8,
//   minZoom: 0.1,
//   nodeHighlightBehavior: true,
//   panAndZoom: false,
//   staticGraph: false,
//   width: 800,
//   node: {
//     color: "#d3d3d3",
//     fontColor: "black",
//     fontSize: 12,
//     fontWeight: "normal",
//     highlightColor: "red",
//     highlightFontSize: 12,
//     highlightFontWeight: "bold",
//     highlightStrokeColor: "SAME",
//     highlightStrokeWidth: 1.5,
//     labelProperty: "name",
//     // labelClass: "person-node-label",
//     mouseCursor: "pointer",
//     opacity: 1,
//     renderLabel: true,
//     size: {
//       width: 700,
//       height: 900,
//     },
//     strokeColor: "none",
//     strokeWidth: 1.5,
//     svg: "",
//     symbolType: "circle",
//     viewGenerator: node => <CustomNode person={node} />,
//   },
//   link: {
//     color: "#d3d3d3",
//     opacity: 1,
//     semanticStrokeWidth: false,
//     strokeWidth: 4,
//     highlightColor: "blue",
//   },
// };

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const onZoomChange = function(previousZoom, newZoom) {
  console.log(`===============: `, previousZoom, newZoom);
  // window.alert(`Graph is now zoomed at ${newZoom} from ${previousZoom}`);
};

export default function GraphReactD3() {
  return (
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
      onZoomChange={onZoomChange}
    />
  );
}
