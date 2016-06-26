// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/* Compile Our Sass
1. Compiles style.scss in /assets/_scss folder to /assets/css
*/

gulp.task('sass', function() {
    return gulp.src('assets/_scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

/* Minify CSS
1. Minifies /assets/css/style.css to /assets/css/style.min.css
*/

gulp.task('minify-css', function() {
  return gulp.src('assets/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css/'));
});

/* Concatenate & Minify JS
1. Concatenate (combine) all JS files within the JS folder to /assets/js with
filename: script.js
2. Minifies script.js into folder /assets/js/min and saves adds a .min.js to
the end of the filename
*/

gulp.task('scripts', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/min'));
});

/* Optimize images
1. Optimizes images in the /assets/img directory and saves them to /assets/img/min
2. Ignores /assets/img/min directory to prevent duplication
*/

gulp.task('image-min', function() {
  gulp.src(['assets/img/*','!assets/img/min'])
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img/min'))
});

/* Minifies HTML
1. Minifies all html files in the root folder
*/

gulp.task('html-min', function() {
  return gulp.src(['*.html','!node_modules','!assets/'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});


/* Watch Files For Changes
1. Gulp will watch for any changes made in the following directories:
- assets/js/*
- assets/_scss/*
- assets/img/*
- *.html
And process them accordingly
*/

gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('assets/_scss/**/*.scss', ['sass']);
    gulp.watch('assets/img/*',['image-min']);
    gulp.watch('*.html',['html-min']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'minify-css', 'scripts', 'image-min', 'html-min', 'watch']);
