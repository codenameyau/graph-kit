/*!
 * graphkit - demo.js
 * MIT LICENSE (c) 2015
 * https://github.com/codenameyau/graphkit
 */
'use strict';

/***************************************************************
* GRAPHKIT DEMO (WORK IN PROGRESS)
***************************************************************/
var graph = graphkit.graph;
var sample = [4, 8, 15, 16, 23, 42];
var width  = 420;
var barHeight = 20;

graphkit.setDomain(0, d3.max(sample));
graphkit.setRange(0, width);

graph.attr('width', width);
graph.attr('height', barHeight * sample.length);

// Pattern: selectAll -> data -> enter -> append
var bars = graph.selectAll('g')
  .data(sample).enter().append('g')
  .attr('transform', function(d, i) {
    return 'translate(0' + i*barHeight + ')';
  });

bars.append('rect')
  .attr('width', graphkit.scale)
  .attr('height', barHeight - 1);

