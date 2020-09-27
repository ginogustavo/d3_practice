/*
d3.selectAll("tr:nth-child(1) .day-high .temp")
  .html("<strong>hot</strong>")
  //.append('span')
  //.insert('span', ':first-child')
  .insert('span', 'strong')
  .html(' today ')
*/
// if you want at the begining, use insert


// d3.selectAll('tr:nth-child(3)')
//   .remove()

//1st you make a selection
//  then how yo manage that selection

d3.selectAll("tr:nth-child(4) .day-high")
  .append('span')
  .html('Hot')

  // .style('background', 'red')
  // .style('padding', '3px')
  // .style('margin-left', '3px')
  // .style('border-radius', '3px')
  // .style('color','white')

  .classed('label label-danger', true)
  //.classed('label label-warning', true)
  //.classed('label label-primary', true)

  .classed('label-danger', false)
  .classed('label-warning', true)
  .style('margin-left', '3px')


d3.select('h2 span')
  .classed('small', false)
  
d3.selectAll('tr')
  .insert('td', ':first-child')// to add at the beining
  .append('input')
  .attr('type', 'checkbox')
  .property('checked', true)