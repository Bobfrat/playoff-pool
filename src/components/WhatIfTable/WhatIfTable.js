import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import picks from "../../data/picks.json";
import results from "../../data/results.json";

/**
 * This component renders the data table
 */
function WhatIfTable() {
  // Reformat the data
  // ["id": "KC", "Bob": 12, "Laurie": ]
  const users = Object.keys(picks.data);
  const gameResults = results.data;

  const formattedData = users.map((user) => {
    let score = 0;
    gameResults.forEach(function (result) {
      score += picks.data[user][result];
    });
    return {
      id: user,
      score
    };
  });

  return (
    <div style={{ width: "30%" }}>
      <p>See how the standings are affected with different outcomes</p>
      <Card title="'What If' Leaderboard">
        <DataTable
          value={formattedData}
          size="small"
          responsiveLayout="scroll"
          stripedRows
          showGridlines
          sortField="score"
          sortOrder={-1}
        >
          <Column field="id" header=""></Column>
          <Column field="score" sortable header="Total Score"></Column>
        </DataTable>
      </Card>
    </div>
  );
}

export default WhatIfTable;
