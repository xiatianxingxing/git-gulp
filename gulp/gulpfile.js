//�����ý�������  ÿ����Ҫ��
//����gulp�ļ�
var gulp = require("gulp");
//����ѹ��js�ļ�
var uglify = require("gulp-uglify");
//���úϲ��ļ�
var concat = require("gulp-concat");
//����ѹ��css�ļ�
var cssnano = require("gulp-cssnano");
//����ѹ��html
var htmlmin = require("gulp-htmlmin");


//��������  ������    ִ������js
gulp.task("temp", function () {
      //   �ļ�·��   ���д������
    gulp.src(["./temp.js","./remp2.js"])
        //�ϲ�js���ϲ��� ��� �ļ���
        .pipe(concat("hehe.js"))
        //����ѹ��
        .pipe(uglify())
        //���    ���·��
        .pipe(gulp.dest("./dest"))
});
//�ϲ�css
gulp.task("tempcss", function () {
    gulp.src(["./aaa.css","./bbb.css"])
        .pipe(concat("index.css"))
        //�ϲ�css
        .pipe(cssnano())
        .pipe(gulp.dest("./dest"))
})
//�ϲ�html
gulp.task("temphtml", function () {
    gulp.src(["index.html"])
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest("./dest"))
})
//gulp.watch �����ļ��仯
//
gulp.task("tempwatch", function () {
    //    ��һ������дҪ���ӵ��ļ�    �ڶ�������дҪִ�еķ���
    //    �ı���ļ�Ҫ�ں���ӿո���ܼ����� ����ӿո�
    gulp.watch(['./aaa.css','./bbb.css'],['tempcss']);
})
