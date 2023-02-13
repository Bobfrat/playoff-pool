import * as React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import picks from "../../data/picks.json";
import results from "../../data/results.json";

const colors = [
  "#7cb5ec",
  "#434348",
  "#90ed7d",
  "#f7a35c",
  "#8085e9",
  "#8d4653",
  "#F1DA62",
  "#DF5353",
  "#2754BB"
];
/**
 * This component renders the data table
 */
function BarChart() {
  // Reformat the data
  // ["id": "KC", "Bob": 12, "Laurie": ]
  const users = Object.keys(picks.data);
  const gameResults = results.winners;

  const userScores = users.map((user) => {
    let score = 0;
    gameResults.forEach(function (result) {
      score += picks.data[user][result];
    });
    return {
      id: user,
      score
    };
  });

  const sortedScores = userScores.sort((a, b) => {
    return b.score - a.score;
  });
  const sortedUsers = sortedScores.map((a) => a.id);

  let winningTeamColors = {};
  let colorInd = 0;
  const series = gameResults.map((team) => {
    const data = sortedUsers.map((user) => {
      const score = picks.data[user][team];
      return [user, score];
    });
    const winningTeams = Object.keys(winningTeamColors);
    const showInLegend = !winningTeams.includes(team);
    let color;
    if (winningTeams.includes(team)) {
      color = winningTeamColors[team];
    } else {
      color = colors[colorInd];
      colorInd += 1;
    }
    winningTeamColors[team] = color;
    console.log(winningTeamColors, team);
    return {
      name: team,
      data,
      color,
      showInLegend
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
      // categories: users,
      title: {
        text: null
      },
      labels: {
        // animate: true,
        formatter: function () {
          // console.log(this);
          return this.value;
        }
      },
      type: "category"
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
      // dataSorting: {
      //   enabled: true,
      //   sortKey: "y"
      // }
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
