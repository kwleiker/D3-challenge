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
    .select("#scatter3d")
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
  z: unpack(rows, 'poverty'), 
  age: unpack(rows, 'age'), 
  income: unpack(rows, 'income'), 
  healthcare: unpack(rows, 'healthcare'), 
  y: unpack(rows, 'obesity'), 
  x: unpack(rows, 'smokes'), 
  obese5: unpack(rows, 'obese5'), 
  smoke5: unpack(rows, 'smoke5'), 
  type: 'scatter3d',
  name: 'Books', 
  //text: w,  //TODO
  textfont : {
    family:'Times New Roman'
  },
  textposition: 'bottom center', 
 // hoverinfo: 'text'
  mode: 'markers+text',
  marker: { 
    color: 'rgb(40, 40, 120)',
    size: [13.9, 15, 14.4, 16.3, 14.8, 12.8, 8.7, 8.7, 8.3, 17.6, 20.9, 8.1, 16.5, 11.9, 14.8, 7.7, 14.5, 10, 18.7, 11, 9.2, 4.6, 10.3, 7.3, 18.8, 12.9, 12.9, 12.4, 17.1, 11.4, 12.5, 15.4, 12.3, 16.1, 8.8, 10.2, 13.9, 11, 10.1, 8, 17.1, 9.9, 14.2, 24.9, 13.9, 6.7, 13.1, 10.7, 10.1, 8.5, 15.1], 
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
Plotly.newPlot('scatter3d', data, layout, {showSendToCloud: true});
});


//=======================================
