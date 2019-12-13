Plotly.d3.csv('tranchData.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var blue = {
	x:unpack(rows, 'pov1'), y: unpack(rows, 'obs1'), z: unpack(rows, 'sm1'), text: unpack(rows, 'state1'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'blue',
		line: {
		color: 'blue',
		width: 0.5},
		opacity: 0.7},
	type: 'scatter3d'
};


var purple = {
	x:unpack(rows, 'pov2'), y: unpack(rows, 'obs2'), z: unpack(rows, 'sm2'), text: unpack(rows, 'state2'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'purple',
		line: {
		color: 'purple',
		width: 0.5},
		opacity: 0.7},
	type: 'scatter3d'
};

var red = {
	x:unpack(rows, 'pov3'), y: unpack(rows, 'obs3'), z: unpack(rows, 'sm3'), text: unpack(rows, 'state3'),
	mode: 'markers',
	marker: {
        size: 6,
        color: 'red',
		line: {
		color: 'red',
		width: 0.5},
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
        title: "obese%"
      },
      zaxis: {
        title: "smoke%"
      }
    }
}


Plotly.newPlot('gammaDiv', data, layout);
});