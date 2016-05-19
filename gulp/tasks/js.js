var config = require('../gulp.config');
var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');

gulp.task('build:js', function() {
    return gulp.src( config.js.entry )
        .pipe( webpack( require('../../webpack.config.js') ) )
        .pipe( gulp.dest( config.js.build ));
});
