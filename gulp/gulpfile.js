//在引用进行下载  每个都要下
//引用gulp文件
var gulp = require("gulp");
//引用压缩js文件
var uglify = require("gulp-uglify");
//引用合并文件
var concat = require("gulp-concat");
//引用压缩css文件
var cssnano = require("gulp-cssnano");
//引用压缩html
var htmlmin = require("gulp-htmlmin");


//创建任务  任务名    执行任务js
gulp.task("temp", function () {
      //   文件路径   多个写成数组
    gulp.src(["./temp.js","./remp2.js"])
        //合并js并合并在 这个 文件中
        .pipe(concat("hehe.js"))
        //进行压缩
        .pipe(uglify())
        //输出    输出路径
        .pipe(gulp.dest("./dest"))
});
//合并css
gulp.task("tempcss", function () {
    gulp.src(["./aaa.css","./bbb.css"])
        .pipe(concat("index.css"))
        //合并css
        .pipe(cssnano())
        .pipe(gulp.dest("./dest"))
})
//合并html
gulp.task("temphtml", function () {
    gulp.src(["index.html"])
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest("./dest"))
})
//gulp.watch 监视文件变化
//
gulp.task("tempwatch", function () {
    //    第一个参数写要监视的文件    第二个参数写要执行的方法
    //    改变的文件要在后面加空格才能监听到 必须加空格
    gulp.watch(['./aaa.css','./bbb.css'],['tempcss']);
})
