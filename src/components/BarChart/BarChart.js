import * as React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import picks from "../../data/picks.json";
import results from "../../data/results.json";

/**
 * This component renders the data table
 */
function BarChart() {
  // Reformat the data
  // ["id": "KC", "Bob": 12, "Laurie": ]
  const users = Object.keys(picks.data);
  const gameResults = results.winners;

  const series = gameResults.map((team) => {
    // let score = 0;
    // gameResults.forEach(function (result) {
    //   score += picks.data[user][result];
    // });

    const data = users.map((user) => {
      return [user, picks.data[user][team]];
    });
    return {
      name: team,
      // dataSorting: {
      //   enabled: true
      //   sortKey: "y"
      // },
      data
    };
  });

  const options = {
    title: {
      text: "Standings"
    },
    credits: {
      enabled: false
    },
    chart: {
      type: "bar"
    },
    xAxis: {
      categories: users,
      title: {
        text: null
      },
      labels: {
        animate: true
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Points",
        align: "high"
      },
      labels: {
        overflow: "justify"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default BarChart;
