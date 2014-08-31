var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var karma = require('karma').server;
var path = require('path');
var runSequence = require('run-sequence');

/**************************************************************
Tasks
/*************************************************************/

gulp.task('build', function() {
	
});

gulp.task('default', function() {
  return runSequence('jshint', watch);
});

gulp.task('jshint', function() {
  return gulp.src(['./src/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('karma', function(done) {
  return karma.start({
    configFile: path.resolve('./test-karma-config.js')
  }, done);
});

gulp.task('test', function() {
  return runSequence('jshint', 'karma');
});
