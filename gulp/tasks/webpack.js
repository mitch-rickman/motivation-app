var config = require('../gulp.config');
var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build:js', function() {
    return gulp.src( config.js.entry )
        .pipe( webpack( require('../../webpack.config.js') ) )
        .pipe( gulp.dest( config.js.build ));
});
