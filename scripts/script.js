(function() {
  console.log('test')

  // d3
  const w = 500;
  const h = 100;
  const barPadding = 1;

  const dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

  const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (w / dataset.length))
    .attr("y", d => h - d * 4)
    .attr("width", w / dataset.length - barPadding)
    .attr("height", d => d * 4)
    .attr("fill", "teal");
})()

