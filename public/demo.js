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

// Set graph properties
graphkit.setWidth(width);
graphkit.setHeight(barHeight * sample.length);
graphkit.setDomain(0, d3.max(sample));
graphkit.setRange(0, width);

// Pattern: selectAll -> data -> enter -> append
var bars = graph.selectAll('g')
  .data(sample).enter().append('g')
  .attr('transform', function(d, i) {
    return 'translate(0' + i*barHeight + ')';
  });

bars.append('rect')
  .attr('width', barHeight)
  .attr('height', barHeight - 1);
