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

graphkit.setWidth = function(value) {
  this.graph.attr('width', value);
};

graphkit.setHeight = function(value) {
  this.graph.attr('height', value);
};

graphkit.setDomain = function(min, max) {
  this.domain[0] = min;
  this.domain[1] = max;
};

graphkit.setRange = function(min, max) {
  this.range[0] = min;
  this.range[1] = max;
};
