var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('image-minify', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});