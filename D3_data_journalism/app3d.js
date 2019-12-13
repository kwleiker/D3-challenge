var svgWidth = 1200;
var svgHeight = 1200;
var margin = {
    right: 10,
    bottom: 10,
    left: 10
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;
// create the area for the graph

var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
 

/**
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
  type: 'scatter3d',
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
*/
var data = [{
    type: "scatter3d", 
    x: [19.3, 11.2, 18.2, 18.9, 16.4, 12, 10.8, 12.5, 17.7, 16.5, 18.3, 11.4, 14.8, 14.4, 15.2, 12.2, 13.6, 19.1, 19.8, 14.1, 10.1, 11.6, 16.2, 11.5, 21.5, 15.5, 15.4, 12.4, 15.2, 9.2, 11.1, 21.3, 15.9, 17.2, 11.5, 15.8, 16.6, 16.6, 13.6, 14.3, 18, 14.2, 18.3, 17.2, 11.7, 12.2, 11.8, 13.2, 18.3, 13.2, 11.2], 
    y: [33.5, 29.7, 28.9, 35.9, 24.7, 21.3, 26.3, 30.7, 21.7, 26.2, 30.5, 22.1, 28.9, 29.3, 32.7, 30.9, 31.3, 31.6, 34.9, 28.2, 29.6, 23.3, 30.7, 27.6, 35.5, 30.2, 26.4, 30.2, 27.7, 27.4, 26.9, 28.4, 27, 29.7, 32.2, 32.6, 33, 27.9, 30.2, 27, 32.1, 29.8, 31.2, 31.9, 25.7, 24.8, 28.5, 27.3, 35.7, 31.2, 29.5],
    z: [21.1, 19.9, 16.5, 24.7, 12.9, 15.7, 15.4, 19.9, 16.4, 17.7, 17.4, 14.1, 15.9, 16.5, 22.9, 18.5, 18.1, 26.2, 24, 19.3, 14.6, 14.7, 21.2, 16.3, 23, 20.6, 19.9, 17.3, 17, 17.5, 15.1, 19.2, 14.4, 19.1, 19.9, 21, 21.1, 17, 19.9, 16.3, 21.5, 18.6, 24.2, 14.5, 9.7, 16.4, 19.5, 15.3, 26.7, 17.4, 19.5],
    text : ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"], 
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
  }
 ]


 var layout = {
    scene: {
      camera: {
        eye: {x: 2, y: 1.5, z: 1}
      },
      xaxis: {
        title: "poverty %"
      },
      yaxis: {
        title: "obesity %"
      },
      zaxis: {
        title: "smoking %"
      }
    }
}
Plotly.plot('graphDiv', data, layout, {showSendToCloud:true});