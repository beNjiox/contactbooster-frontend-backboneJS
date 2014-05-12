var gulp       = require('gulp');
var gutil      = require('gulp-util');
var coffee     = require('gulp-coffee');
var scss       = require('gulp-sass');
var livereload = require('gulp-livereload');
var plumber    = require('gulp-plumber');
var connect    = require('gulp-connect');


var paths = {
  scripts:   ['javascripts/**/*.coffee'],
  scss:      ['stylesheets/scss/*.scss'],
  templates: ['javascripts/views/partials/*', 'index.html']
};

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


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.partials, ['partials']);
  gulp.watch(paths.templates, ['templates']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'scss', 'watch', 'connect']);
