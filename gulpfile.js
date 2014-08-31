var pkg = require('./package.json');

var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');
var header = require('gulp-header');
var karma = require('karma').server;
var ngAnnotate = require('gulp-ng-annotate');
var path = require('path');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');

var banner = [
  '/**',
  ' * <%= pkg.name %> v<%= pkg.version %> - <%= releaseDate %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.licenses[0].type %> - <%= pkg.licenses[0].description %>',
  ' */',
  ''
].join('\n');

/**************************************************************
Tasks
/*************************************************************/

gulp.task('build', function(done) {
  return runSequence('clean', 'uglify', done);
});

gulp.task('clean', function() {
  return gulp.src('./dist', {
    read: false
  }).pipe(clean());
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

gulp.task('test', function(done) {
  return runSequence('jshint', 'karma', done);
});

gulp.task('uglify', function(done) {
  return gulp.src('./src/**/*.js')
    .pipe(concat('closure.js'))
    .pipe(ngAnnotate())
    .pipe(header(banner, {
      pkg: pkg,
      releaseDate: (new Date()).toISOString().slice(0, 10)
    }))
    .pipe(gulp.dest('./dist'))

    .pipe(concat('closure.min.js'))
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg,
      releaseDate: (new Date()).toISOString().slice(0, 10)
    }))
    .pipe(gulp.dest('./dist'));
});
