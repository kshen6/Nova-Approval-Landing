var connect = require('gulp-connect');
var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: false
  });
});

gulp.task('watch', shell.task("webpack --watch"));