import React from "react";
import './App.css';
// import GraphReactD3 from "./components/graph-react-d3";
import { NetworkTree } from "./components/visx-tree/Index";

function App() {
  return (
    <div>
      {/* <GraphReactD3 /> */}
      <NetworkTree
        width={600}
        height={600}
      />
    </div>
  );
}

export default App;
