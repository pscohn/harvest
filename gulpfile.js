var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var ignore = require('gulp-ignore');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var streamify = require('gulp-streamify');

var paths = {
  main_js: ['index.js'],
  js: ['**/*.js'],
  css: ['stylesheets/**/*.scss'],
};

gulp.task('buildCss', function() {
  gulp.src('stylesheets/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./static/'));
});

gulp.task('buildJs', function() {
  browserify({
    entries: paths.main_js, 
    extensions: ['.jsx', '.js'],
    debug: true
  })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .on('error', gutil.log)
    .pipe(gulp.dest('./static/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.js, ['buildJs']);
  gulp.watch(paths.css, ['buildCss']);
});

gulp.task('default', ['buildCss', 'buildJs', 'watch']);
gulp.task('build', ['buildCss', 'buildJs']);
