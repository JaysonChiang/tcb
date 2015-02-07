// Include gulp
var gulp = require('gulp'); 
var sass = require('gulp-sass');
var tinylr;

gulp.task('express', function() {
  var express = require('express');
  var app = express();

  app.use(require('connect-livereload')({port:4002}));

  app.use(express.static(__dirname));
  app.listen(4000);
});

gulp.task('styles', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('livereload',function(){
    tinylr = require('tiny-lr')();
    tinylr.listen(4002);
});

function notifyLiveReload(event){
    var fileName = require('path').relative(__dirname, event.path);
    
    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

gulp.task('watch',function(){
    gulp.watch('sass/*.scss',['styles']);
    gulp.watch('*.html', notifyLiveReload);
    gulp.watch('css/*.css', notifyLiveReload);
});

gulp.task('default', ['styles','express', 'livereload', 'watch'], function(){

});
/*
// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var jsSource = '../tcb/lib/*.js';
var cssSource = '../tcb/lib/*.scss';
var jsTarget = '../tcb/dist';
var cssTarget = '../tcb/css'

// Lint Task
gulp.task('lint', function(){
	return gulp.src(jsSource)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(cssSource)
        .pipe(sass())
        .pipe(gulp.dest(cssTarget));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(jsSource)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(jsTarget))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsTarget));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(jsSource, ['lint', 'scripts']);
    gulp.watch(cssSource, ['sass']);
});

// Default Task
gulp.task('default', ['express','lint', 'sass', 'scripts', 'watch'], function(){

});

*/