/**
 * Created by dominic on 21/11/16.
 */

'use strict';
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');

var source = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('test', function(cb){
    gulp.src([
        './src/types/**/*.js',
        './index.js'
    ])
        .pipe( istanbul() )
        .on( 'finish', function(){
            gulp.src([
                './src/test/**/*.js'
            ])
                .pipe( mocha({ reporter: 'spec' }) )
                .pipe( istanbul.writeReports() ) //stores reports in "coverage" directory
                .on( 'end', cb);
        });
});

gulp.task('coveralls', function(cb){
    return gulp.src('./coverage/lcov.info')
        .pipe(coveralls());
});

gulp.task('watch', function(){
    gulp.watch('./src/types/**', ['test']);
    gulp.watch('./src/test/**', ['test']);
});

gulp.task('browserify', function () {
    return browserify({
        entries: "./index.js",
        standalone: "dsJS"
    })
        .bundle()
        .pipe(source('dsJS.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['watch']);

// add uglifyjs compression here when we figure that out
gulp.task('dist', ['browserify']);
