var gulp = require('gulp');
var babel = require("gulp-babel");
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var merge = require('merge2');
var shell = require('gulp-shell')
var del = require('del')

var tsProject = ts.createProject('tsconfig.json', { declaration: true } );

// This task doesn't output sourceMap because gulp-typescript doesn't support it.
gulp.task('build-ts-def', function() {
    var tsResult = gulp.src('src/**/*.ts')                    
                    .pipe(ts(tsProject));
                    
    return tsResult.dts.pipe(gulp.dest('dist/def'));
});

// Use when you want to watch the changes of source files and automatically build them.
gulp.task('watch', ['build'], function() {
    gulp.watch('src/**/*.ts', ['build']);
});


// To use native tsc command, use the task command.
gulp.task('build', shell.task([  
  'tsc'
]))

// Clean and build
gulp.task('rebuild', ['clean', 'build']);

// Clean up all output files.
gulp.task('clean', function(cb) {
  del(['dist', 'tmp', '**/*.log'], cb);
});
