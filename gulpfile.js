var gulp = require('gulp');
var sass = require('gulp-sass');

var reactDest = './react/build';
var ng2Dest = './ng2/public';

gulp.task('default', function() {
    gulp.src('./shared/styles/index.scss')
        .pipe(sass())
        .pipe(gulp.dest(reactDest))
        .pipe(gulp.dest(ng2Dest))
});

gulp.task('watch', function() {
    gulp.watch('./shared/styles/**/*.scss', ['default']);
});
