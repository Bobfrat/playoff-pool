import * as React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import picks from "../../data/picks.json";
import results from "../../data/results.json";

/**
 * This component renders the data table
 */
function PicksTable() {
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  // Reformat the data
  // ["id": "KC", "Bob": 12, "Laurie": ]
  const teams = Object.keys(picks.data.Bob);
  const losers = results.losers;

  const formattedData = teams.map((team) => {
    const users = Object.keys(picks.data);

    let userPick = {};
    users.forEach(function (user) {
      userPick[user] = picks.data[user][team];
    });
    return {
      ...userPick,
      id: team
    };
  });

  const boldBodyTemplate = (rowData) => {
    return <div style={{ fontWeight: "bold" }}>{rowData.id}</div>;
  };

  const rowClass = (data) => {
    return {
      "row-strike-thru": losers.indexOf(data.id) > -1
    };
  };

  return (
    <div>
      <DataTable
        value={formattedData}
        size="small"
        responsiveLayout="scroll"
        scrollable
        scrollDirection="both"
        // stripedRows
        showGridlines
        selectionMode="single"
        // selection={selectedTeam}
        // onSelectionChange={(e) => setSelectedTeam(e.value)}
        // className="mt-3"
        scrollHeight="800px"
        rowClassName={rowClass}
      >
        <Column
          field="id"
          header=""
          style={{ width: "53px", height: "30px" }}
          frozen
          body={boldBodyTemplate}
        ></Column>
        <Column
          field="Adam"
          header="Adam"
          style={{ width: "90px", height: "30px" }}
          sortable
          // bodyStyle={bodyStyle}
        ></Column>
        <Column
          field="Amy"
          header="Amy"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Bob"
          header="Bob"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Brian"
          header="Brian"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Dave"
          header="Dave"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Frank"
          header="Frank"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Jim"
          header="Jim"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Jo"
          header="Jo"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Laurie"
          header="Laurie"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Matt"
          header="Matt"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Monica"
          header="Monica"
          style={{ width: "95px", height: "30px" }}
          sortable
        ></Column>
        <Column
          field="Tony"
          header="Tony"
          style={{ width: "90px", height: "30px" }}
          sortable
        ></Column>
      </DataTable>
    </div>
  );
}

export default PicksTable;
