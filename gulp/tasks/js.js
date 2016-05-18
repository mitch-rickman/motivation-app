var config = require('../gulp.config');
var gulp = require('gulp');
var babel = require('gulp-babel');
var webpack = require('gulp-webpack');

gulp.task('build:js', function() {
    return gulp.src( config.js.entry )
        .pipe( webpack( require('../../webpack.config.js') ) )
        .pipe( babel() )
        .pipe( gulp.dest( config.js.build ));
});
