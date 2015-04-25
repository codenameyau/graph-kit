/*!
 * graphkit - graphkit.js
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/graphkit
 */
'use strict';

/***************************************************************
* GRAPHKIT LIBRARY
***************************************************************/
var graphkit = graphkit || {
  graph: d3.select('.graph'),
  domain: [0, 10],
  range:  [0, 10],
};

graphkit.scale = function(value) {
  return d3.scale.linear()
    .domain(this.domain)
    .range(this.range)(value);
};

graphkit.setDomain = function(min, max) {
  this.domain[0] = min;
  this.domain[1] = max;
};

graphkit.setRange = function(min, max) {
  this.range[0] = min;
  this.range[1] = max;
};


/***************************************************************
* WORK IN PROGRESS
***************************************************************/
var graph = graphkit.graph;
var sample = [4, 8, 15, 16, 23, 42];
graphkit.setDomain(0, d3.max(sample));
graphkit.setRange(0, 420);

graph.selectAll('div')
    .data(sample)
  .enter().append('div')
    .style('background', function() {return 'blue'; })
    .style('width', function(d) {return graphkit.scale(d) + 'px';})
    .text(function(d) { return d; });
