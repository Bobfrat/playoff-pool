import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import picks from "../../data/picks.json";
import results from "../../data/results.json";

/**
 * This component renders the data table
 */
function ResultsTable() {
  // Reformat the data
  // ["id": "KC", "Bob": 12, "Laurie": ]
  const users = Object.keys(picks.data);
  const gameResults = results.winners;

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

  const boldBodyTemplate = (rowData) => {
    return <div style={{ fontWeight: "bold" }}>{rowData.id}</div>;
  };

  return (
    <div>
      <DataTable
        value={formattedData}
        size="small"
        responsiveLayout="scroll"
        stripedRows
        showGridlines
        sortField="score"
        sortOrder={-1}
        style={{ maxWidth: "500px" }}
      >
        <Column
          field="id"
          style={{ width: "95px", height: "30px", textAlign: "right" }}
          header=""
          body={boldBodyTemplate}
        ></Column>
        <Column
          field="score"
          style={{ width: "95px", height: "30px" }}
          sortable
          header="Total Score"
        ></Column>
      </DataTable>
    </div>
  );
}

export default ResultsTable;
