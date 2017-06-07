/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-18 14:12:52
 * @version $Id$
 */
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
var clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src(['dist/index.html'], { read: false })
               .pipe(clean());
});
var cssmin = require('gulp-minify-css');

gulp.task('styles', function() {
    return gulp.src('dist/css/*.css') //源文件路径
        .pipe(cssmin()) //css压缩
        .pipe(gulp.dest('dist/css')) //目的路径
});
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('dist/js/*.js')  //源文件路径
        .pipe(concat('main.js'))  //合并文件
        .pipe(gulp.dest('dist/js')) //目的路径
})