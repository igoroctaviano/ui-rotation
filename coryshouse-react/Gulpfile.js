"use strict";

var gulp       = require('gulp'),
    connect    = require('gulp-connect'),        // Runs a local dev server
    open       = require('gulp-open'),           // Open a URL in a web browser
    browserify = require('browserify'),          // Bundles JS
    reactify   = require('reactify'),            // Transforms React JSX to JS
    source     = require('vinyl-source-stream'), // Use conventional text streams with Gulp
    concat     = require('gulp-concat'),         // Concatenates files
    lint       = require('gulp-eslint');         // Lint JS files, including JSX

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
      html: './src/*.html',
      js: './src/**/*.js',
      images: './src/images/*',
      dist: './dist',
      css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        './src/css/*'
      ],
      mainJs: './src/main.js'
    }
};

// Start a local dev server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload()); // Reload the browser
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + "/css"));
});

gulp.task('images', function() {
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());

  // Publish favicon
  gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function() {
  gulp.src(config.paths.js)
      .pipe(lint({ configFile: 'eslint.config.json' }))
      .pipe(lint.format());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);