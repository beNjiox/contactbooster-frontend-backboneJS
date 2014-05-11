var gulp       = require('gulp');
var gutil      = require('gulp-util');
var coffee     = require('gulp-coffee');
var scss       = require('gulp-sass');
var livereload = require('gulp-livereload');
var plumber    = require('gulp-plumber');


var paths = {
  scripts: ['javascripts/**/*.coffee'],
  scss: ['stylesheets/scss/*.scss']
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    .pipe(plumber())
    .pipe(coffee())
      .on('error', gutil.log)
      .on('error', gutil.beep)
    .pipe(gulp.dest('./javascripts'))
    .pipe(livereload());
});

gulp.task('scss', function () {
  gulp.src(paths.scss)
    .pipe(scss())
    .pipe(gulp.dest('./stylesheets'))
    .pipe(livereload());
});

gulp.task('templates', function(){
  gulp.src('index.html')
  .pipe(livereload());
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch('./index.html', ['templates']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'scss', 'watch']);
