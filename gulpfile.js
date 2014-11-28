var gulp        = require("gulp");
var gutil       = require('gulp-util');
var less        = require('gulp-less-sourcemap');
var rimraf      = require('gulp-rimraf');
var path        = require('path');
var filter      = require('gulp-filter');
var browserify  = require('gulp-browserify');
var uglify      = require('gulp-uglify');
var browserSync = require("browser-sync");
var clean       = require('gulp-clean');
var bump        = require('gulp-bump');

gulp.task('less', ['copy-less'], function () {
    gulp.src('./less/**/suit.less')
        .pipe(less({
            generateSourceMap: true, // default true
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist/css'));
    //.pipe(browserSync.reload);
});

//gulp.task('less', function () {
//    return gulp.src('less/**/*.less')
//        .pipe(less({sourcemap: true}))
//        .pipe(gulp.dest('css'))// Write the CSS & Source maps
//        .pipe(filter('**/*.css')) // Filtering stream to only css files
//        .pipe(browserSync.reload({stream:true}));
//});

// start server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080
    });
});

gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('src/js/app.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean-less', function () {
    return gulp.src('dist/less/**/*.less', {read: false})
        .pipe(clean());
});

gulp.task('clean-directives', function () {
    return gulp.src('dist/directive/**/*', {read: false})
        .pipe(clean());
});

gulp.task('copy-less',['clean-less'], function(){
    gulp.src('less/**/*.less')
        .pipe(gulp.dest('dist/less'));
});

gulp.task('copy-directives',['clean-directives'], function(){
    gulp.src('directive/**/*.*')
        .pipe(gulp.dest('dist/directive'));
});

// Bump project version ( patch | minor | major | prerelease )
gulp.task('bump', function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump())
        .pipe(gulp.dest('./'));
});
gulp.task('bump:minor', function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'minor' }))
        .pipe(gulp.dest('./'));
});
gulp.task('bump:major', function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'major' }))
        .pipe(gulp.dest('./'));
});
gulp.task('bump:prerelease', function () {
    gulp.src(['./bower.json', './package.json'])
        .pipe(bump({ type: 'prerelease' }))
        .pipe(gulp.dest('./'));
});

// use default task to launch BrowserSync and watch files
gulp.task('default', ['browser-sync'], function () {
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("less/**/*.less", ['less', browserSync.reload]);
    gulp.watch(["*.js","partial/**/*.js","directive/**/*.js"], ['js', 'copy-directives', browserSync.reload]);
    gulp.watch(["*.html","partial/**/*.html"], browserSync.reload);
});
