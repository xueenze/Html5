const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('sass', () => {
    return sass('./src/sass/*.scss').on('error', sass.logError).pipe(gulp.dest('./src/css/style'));
});

gulp.task('dist', () => {
    gulp.watch('./src/sass/*.scss', ['scss']);
});
