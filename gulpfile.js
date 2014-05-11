var gulp       = require('gulp');
var coffee     = require('gulp-coffee');
var scss       = require('gulp-sass');
var livereload = require('gulp-livereload');

var paths = {
  scripts: ['javascripts/**/*.coffee'],
  scss: ['stylesheets/scss/*.scss']
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.scripts)
    .pipe(coffee())
    .pipe(gulp.dest('./javascripts'))
    .pipe(livereload());
});

gulp.task('scss', function () {
  gulp.src(paths.scss)
    .pipe(scss())
    .pipe(gulp.dest('./stylesheets'))
    .pipe(livereload());
});



// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'scss', 'watch']);
