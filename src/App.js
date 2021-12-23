import React from "react";
import "./App.css";
// import GraphReactD3 from "./components/graph-react-d3";
import { NetworkTree } from "./components/visx-tree/Index";
import { manupulateBoxTree } from "./components/visx-tree/helpers/manupulateTree";
import { Tabs, Tab, Box } from "@mui/material";
import { cafeData } from "./components/visx-tree/Data";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <GraphReactD3 /> */}
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label='Manual' {...a11yProps(0)} />
        <Tab label='Auto' {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <NetworkTree width={2000} height={2000} networkData={cafeData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        {manupulateBoxTree().map((tree, i) => (
          <NetworkTree key={i} width={400} height={400} networkData={tree} />
        ))}
      </TabPanel>
    </div>
  );
}

export default App;
