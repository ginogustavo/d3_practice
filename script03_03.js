var bardata = [];//12, 78, 45, 15, 45, 66, 24, 64

for(var i=0;i<100;i++){
  bardata.push(Math.random()*30);
}

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([0,height]);

var xScale = d3.scaleBand()
    .domain(bardata)
    .paddingInner(.3)
    .paddingOuter(.1)
    .range([0, width])

var colors = d3.scaleLinear()
  .domain([0,
    bardata.length * .33,
    bardata.length * .66,
    bardata.length])  //.domain([0,d3.max(bardata)])
  .range(['#FFBB32', '#C61C6F','#2688D2','#85992C' ])

d3.select('#viz').append('svg')
  .attr('width', width)
  .attr('height', height)
  //.style('background', '#C9D7D6')
.selectAll('rect').data(bardata)
  .enter().append('rect')
    .style('fill', function(d, i){
      return colors(i);
    })
    .attr('width', function(d) {
      return xScale.bandwidth();
    })
    .attr('height', function(d) {
      return yScale(d);
    })
    .attr('x', function(d) {
      return xScale(d);
    })
    .attr('y', function(d) {
      return height - yScale(d);
    });