Plotly.d3.csv('tranchData.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var blue = {
	x:unpack(rows, 'pov1'), y: unpack(rows, 'inc1'), z: unpack(rows, 'hc1'), text: unpack(rows, 'state1'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'blue',
		line: {
		color: 'blue',
		width: 01},
		opacity: 0.7},
	type: 'scatter3d'
};


var purple = {
	x:unpack(rows, 'pov2'), y: unpack(rows, 'inc2'), z: unpack(rows, 'hc2'), text: unpack(rows, 'state2'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'purple',
		line: {
		color: 'purple',
		width: 1},
		opacity: 0.7},
	type: 'scatter3d'
};

var red = {
	x:unpack(rows, 'pov3'), y: unpack(rows, 'inc3'), z: unpack(rows, 'hc3'), text: unpack(rows, 'state3'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'red',
		line: {
		color: 'rgb:(255,0,0)',
		width: 1},
		opacity: 0.7},
	type: 'scatter3d'
};



var data = [red, purple, blue];

var layout = {
    scene: {
      camera: {
        eye: {x: 1.2, y: 1.2, z: 1.2}
      },
      xaxis: {
        title: "pov%"
      },
      yaxis: {
        title: "income k$"
      },
      zaxis: {
        title: "lack HC%"
      }
    }
};


Plotly.newPlot('gammaDiv', data, layout);
});