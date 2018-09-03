'use strict';

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    newer = require('gulp-newer'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync');


/*var sTemplatePath = 'local/templates/wegym/';*/
var sDevPath = 'assets_dev/';
var sProdPath = 'assets_prod/';

var path = {
    src: {      // dev
        js: sDevPath+'js/main.js',
        style: sDevPath+'scss/style.scss',
        img: sDevPath+'img/**/*.*',
        svg: sDevPath+'svg/**/*.*',
        fonts: sDevPath+'fonts/**/*.*'
    },
    build: {    // prod
        js: sProdPath+'js/',
        css: sProdPath+'css/',
        img: sProdPath+'img/',
        svg: sProdPath+'svg/',
        fonts: sProdPath+'fonts/'
    },
    watch: {
        js: sDevPath+'js/**/*.js',
        style: sDevPath+'scss/**/*.scss',
        img: sDevPath+'img/**/*.*',
        svg: sDevPath+'svg/**/*.*',
        fonts: sDevPath+'fonts/**/*.*'
    },
    clean: sProdPath
};

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(rigger())
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(babel({
            presets: ['env']
        }))
        //.pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js)).pipe(browserSync.stream());
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass({
            includePaths: [sDevPath+'scss/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)).pipe(browserSync.stream());
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(newer(path.build.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)).pipe(browserSync.stream());
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts))
});

gulp.task('svg:build', function() {
    gulp.src(path.src.svg)
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(imagemin({
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest(path.build.svg))
});

gulp.task('build', [
    'js:build',
    'style:build',
    'fonts:build',
    'svg:build',
    'image:build',
    'browserSync'
]);

gulp.task('browserSync', function(){
    browserSync({
        port: 3000,
        server: {
            baseDir: './',
        },
        notify: false
    });
});


gulp.task('watch', function(){
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.svg], function(event, cb) {
        gulp.start('svg:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', ['build', 'watch']);