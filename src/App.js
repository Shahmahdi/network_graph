import React from "react";
import './App.css';
// import GraphReactD3 from "./components/graph-react-d3";
import { NetworkTree } from "./components/visx-tree/Index";

function App() {
  return (
    <div>
      {/* <GraphReactD3 /> */}
      <NetworkTree
        width={2000}
        height={2000}
      />
    </div>
  );
}

export default App;
