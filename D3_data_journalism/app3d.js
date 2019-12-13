var svgWidth = 900;
var svgHeight = 900;
var margin = {
    right: 100,
    bottom: 100,
    left: 100
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
  x: unpack(rows, 'poverty'), 
  z: unpack(rows, 'obesity'), 
  y: unpack(rows, 'smokes'), 
  type: 'scatter',
  name: 'Health', 
  textfont : {
    family:'Helvetica'
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
}

)
 var layout = {
    scene: {
      camera: {
        eye: {x: 2, y: 1.5, z: 1}
      },
      xaxis: {
        title: "poverty"
      },
      yaxis: {
        title: "obesity"
      },
      zaxis: {
        title: "smoking"
      }
    }
}
Plotly.plot('graphDiv', stateData, layout, {showSendToCloud:true});
});