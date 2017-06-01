var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

//Task de Excução do SASS WATCH
gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass'])
});

//Task de Excução do SASS
gulp.task('sass', function(){
    return sass ('sass/**/*.sass').pipe(gulp.dest('css'))//.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(gulp.dest('./css'));
});

//Task de Execução do GULP
gulp.task('default', ['sass', 'watch']);

