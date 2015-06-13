var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src(['assets/styles/app.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/styles'))
})

gulp.task('default', function() {

    gulp.watch('assets/styles/**', function(event) {
        gulp.run('styles');
    })

})
