var gulp        = require('gulp'),
    server      = require('gulp-express'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    uglify      = require('gulp-uglify'),
    nib         = require('nib'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    path        = require('path');

// Lint javascript
gulp.task('lint', function(){
    gulp.src('public/javascripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Bundle javascript
gulp.task('bundle', function () {
    var bundle = browserify({ entries: ['./public/javascripts/main.js'] })
        .bundle()
        .pipe(source('fctable.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts/'))
});

// Compile Stylus stylesheets
gulp.task('stylus', function(){
    gulp.src('public/stylesheets/*.styl')
        .pipe(stylus({
            use: [nib()],
            compress: true
        }))
        .pipe(gulp.dest('public/stylesheets/'))
});

// Compile Jade templates
gulp.task('jade', function(){
    gulp.src('views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./views/'))
});

// Watch for changes and restart server if necessary
gulp.task('server', function(){
    // Start server
    server.run(['bin/fctable']);
    gulp.watch('routes/*.js', ['server']);
    gulp.watch('public/javascripts/*.js', ['lint']);
    gulp.watch('public/stylesheets/*.styl', ['stylus']);
    gulp.watch('views/*.jade', ['jade']);
});

gulp.task('deploy', ['lint', 'bundle', 'stylus', 'jade']);

// Default task
gulp.task('default', ['lint', 'bundle', 'stylus', 'jade', 'server']);
