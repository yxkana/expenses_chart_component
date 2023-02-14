var jsonData = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

var yValues = [];
for (var i in jsonData) {
  yValues.push([i, jsonData[i]][1]["amount"]);
}

console.log(yValues);

var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var backgroundColor = [
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
  "hsl(10, 79%, 65%)",
];

var barColors = "hsl(10, 79%, 65%)";
var bColor = "black";

const body = (tooltipItems) => {
  let sum = 0;

  tooltipItems.forEach(function (tooltipItem) {
    sum += tooltipItem.parsed.y;
  });
  return "$" + sum;
};

var options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 30,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      label: false,
    },
    tooltip: {
      caretSize: 0,
      position: "average",
      padding: {
        x: 14,
        y: 5,
      },
      footerFont: {
        size: 17,
      },
      yAlign: "bottom",
      callbacks: {
        title: () => {
          return "";
        },
        label: () => {
          return "";
        },
        footer: body,
      },
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: "hsl(28, 10%, 53%)",
        font: {
          size: 15,
        },
      },
    },
    y: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
};

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderRadius: 5,
        borderSkipped: false,
        pointHoverRadius: 5,
      },
    ],
  },
  options: options,
});
