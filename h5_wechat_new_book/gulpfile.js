const gulp = require('gulp');
const sass = require('gulp-ruby-sass');

gulp.task('sasscombo', () => {
    return sass('./src/sass/style.scss').on('error', sass.logError).pipe(gulp.dest('./src/css'));
});
