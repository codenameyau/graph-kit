/*!
 * graphkit.js
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/graphkit
 */
'use strict';

var graphkit = graphkit || {};

var data = [4, 8, 15, 16, 23, 42, 74];

var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 420]);

var graph = d3.select('.graph');

graph.selectAll('div')
    .data(data)
  .enter().append('div')
    .style('background', function() {return 'blue'; })
    .style('width', function(d) {return x(d) + 'px';})
    .text(function(d) { return d; });
