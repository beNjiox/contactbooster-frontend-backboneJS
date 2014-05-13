// ------------------------------------------------------
// Config & Paths
// ------------------------------------------------------

var gulp        = require('gulp');
var gutil       = require('gulp-util');
var coffee      = require('gulp-coffee');
var scss        = require('gulp-sass');
var livereload  = require('gulp-livereload');
var plumber     = require('gulp-plumber');
var connect     = require('gulp-connect');
var rjs         = require('gulp-requirejs');
var uglify      = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var mocha       = require('gulp-mocha');

var paths = {
  scripts:     ['javascripts/**/*.coffee'],
  test_coffee: ['tests/*.coffee'],
  scss:        ['stylesheets/scss/*.scss'],
  templates:   ['javascripts/views/partials/*', 'index.html']
};

// ------------------------------------------------------
// Dev tasks
// ------------------------------------------------------

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(coffee())
      .on('error', gutil.log)
      .on('error', gutil.beep)
    .pipe(gulp.dest('./javascripts'))
    .pipe(connect.reload());
});

gulp.task('test_coffee', function() {
  return gulp.src(paths.test_coffee)
    .pipe(plumber())
    .pipe(coffee())
      .on('error', gutil.log)
      .on('error', gutil.beep)
    .pipe(gulp.dest('./tests'))
    .pipe(connect.reload());
});

gulp.task('scss', function () {
  gulp.src(paths.scss)
    .pipe(scss())
    .pipe(gulp.dest('./stylesheets'))
    .pipe(connect.reload());
});

gulp.task('templates', function(){
  gulp.src(paths.templates)
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.test_coffee, ['test_coffee']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.partials, ['partials']);
  gulp.watch(paths.templates, ['templates']);
});

// ------------------------------------------------------
// Prod tasks
// ------------------------------------------------------

gulp.task('rjs:prod', function() {
    rjs({
        baseUrl: "./javascripts/",
        name: "main",
        out: "main.js",
        paths: {
          'requireLib': '../bower_components/requirejs/require',
          'jQuery': '../bower_components/jquery/dist/jquery.min',
          'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min',
          'underscore': '../bower_components/underscore/underscore',
          'backbone': '../bower_components/backbone/backbone',
          'backbone.localStorage': '../bower_components/backbone.localStorage/backbone.localStorage-min',
          'text': '../bower_components/requirejs-text/text'
        },
        include:'requireLib'
    })
    .pipe(gulp.dest('./dist/javascripts'));
});

gulp.task('scss:prod', function(){
  gulp.src(paths.scss)
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('move:prod', function(){
  gulp.src(['index.html'])
      .pipe(htmlreplace({
        'js': 'javascripts/main.js'
      }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
  gulp.src(['tests/index.js'])
      .pipe(mocha({reporter: 'spec'}));
});

gulp.task('default', ['scripts', 'test_coffee', 'scss', 'watch', 'connect']);
gulp.task('prod', ['rjs:prod', 'scss:prod', 'move:prod']);
