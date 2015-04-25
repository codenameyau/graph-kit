/*!
 * graphkit - gulpfile.js
 * MIT License (c) 2015
 */
'use strict';

// Load dependecies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var rimraf = require('rimraf');
var strReplace = require('gulp-replace');

// [Task] removes 'build/'
gulp.task('clean', function(cb) {
  rimraf('build/', cb);
});

// [Task] uglify js
gulp.task('uglify', function() {
  return gulp.src('public/graphkit.js')
    .pipe(strReplace(/'use strict';/g, ''))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'));
});

// [Task] generates build
gulp.task('default', ['uglify']);
