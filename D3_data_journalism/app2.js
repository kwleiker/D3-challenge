var svgWidth = 400;
var svgHeight = 800;
var margin = {
    right: 100,
    bottom: 100,
    left: 200
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
// create the area for the graph

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
 
 
 Plotly.d3.csv("stateData.csv", function(err, rows){
  function unpack(rows, key) {
    return rows.map(function(row)
    { return row[key]; });
  }
 var stateData = {
  text: unpack(rows, 'state'), 
  text2: unpack(rows, 'abbr'), 
  poverty: unpack(rows, 'poverty'), 
  age: unpack(rows, 'age'), 
  x: unpack(rows, 'income'), 
  y: unpack(rows, 'healthcare'), 
  obesity: unpack(rows, 'obesity'), 
  smokes: unpack(rows, 'smokes'), 
  obese5: unpack(rows, 'obese5'), 
  smoke5: unpack(rows, 'smoke5'), 
  type: 'scatter',
  name: 'health', 
  textfont : {
    family:'Times New Roman'
    },
  textposition: 'bottom center', 
 // hoverinfo: 'text'
  mode: 'markers+text',
  marker: { 
    color: 'rgb(40, 40, 120)',
    size: [33.5, 29.7, 28.9, 35.9, 24.7, 21.3, 26.3, 30.7, 21.7, 26.2, 30.5, 22.1, 28.9, 29.3, 32.7, 30.9, 31.3, 31.6, 34.9, 28.2, 29.6, 23.3, 30.7, 27.6, 35.5, 30.2, 26.4, 30.2, 27.7, 27.4, 26.9, 28.4, 27, 29.7, 32.2, 32.6, 33, 27.9, 30.2, 27, 32.1, 29.8, 31.2, 31.9, 25.7, 24.8, 28.5, 27.3, 35.7, 31.2, 29.5],
    symbol: 'circle', 
    markerposition: 'inside', 
    line: {
      color: 'rgb(50, 50, 200)',
      width: 1
    },
    opacity: 0.5 
  }
};

var data = [ stateData ];

var layout = { 
  xaxis: { 
      title: {
          text: 'Median Income ($)',
          font: {
              family: 'Helvetica, Arial',
              size: 24, 
              color: 'rgb(0,0,0)'
              }
        },
    range: [30000, 80000]  //TODO
  },
  yaxis: {
    title: {
        text: 'Uninsured (%)',
        font: {
            family: 'Helvetica, Arial',
            size: 24, 
            color: 'rgb(0,0,0)'
            }
      },

    range: [0, 30]   //TODO
  },
  
  legend: {
    y: 0.5,
    yref: 'paper',
    font: {
      family: 'Arial, sans-serif',
      size: 20, 
      color: 'light blue',
    }
  },
 // title:'Lack of Insurance and Poverty'
  title: {
    text: 'Lack of Insurance and Poverty (markersize=%smokers)',
    font: {
        family: 'Helvetica, Arial',
        size: 24, 
        color: 'rgb(0,0,0)'
        }
  },

};
Plotly.newPlot('scatter', data, layout, {showSendToCloud: true});
});


//=======================================
