var config = require('../gulp.config.js');
var gulp = require('gulp');
var sass = require('./sass');
var templates = require('./templates');

var watch = require('gulp-watch');

gulp.task('default', ['build:sass', 'build:templates']);

gulp.task('watch', function() {
    watch(config.css.src, function() {
        gulp.start('build:sass');
    });
    watch(config.templates.src, function() {
        gulp.start('build:templates');
    });
    // gulp.watch(config.css.src, ['build:sass']);
    // gulp.watch(config.templates.src, ['build:templates']);
});
