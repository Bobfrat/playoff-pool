import * as React from "react";
// import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Navigation from "./components/Nav/Nav";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import WhatIfTable from "./components/WhatIfTable/WhatIfTable";
import PicksTable from "./components/PicksTable/PicksTable";
import BarChart from "./components/BarChart/BarChart";
import { TabView, TabPanel } from "primereact/tabview";

import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = React.useState(1);

  return (
    <Container>
      <Navigation />
      <h1>NFL Playoff Pool</h1>
      <h2>Total payout: $240</h2>
      <h5>Last Updated: After CIN-BAL Wildcard game</h5>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Picks">
          <PicksTable />
        </TabPanel>
        <TabPanel header="Leaderboard">
          <ResultsTable />
        </TabPanel>
        <TabPanel header="Chart">
          <BarChart />
        </TabPanel>
        {/*<TabPanel header="What-if Standings">
          <WhatIfTable />
        </TabPanel>*/}
      </TabView>
    </Container>
  );
}

export default App;
