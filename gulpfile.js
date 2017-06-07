var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var cleanCSS = require('gulp-clean-css');

//Minificar CSS
 gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('css'))
});
 
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

//Task de Excução do SASS WATCH
gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass'])
});

//Task de Excução do SASS
gulp.task('sass', function(){
    return sass ('sass/**/*.sass')    
    .pipe(gulp.dest('css'))
});

//Task de Execução do GULP
gulp.task('default', ['sass', 'watch', 'minify-css']);

