var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify')
var BROWSER_SYNC_RELOAD_DELAY = 500;


gulp.task('build', function () {
    process.env.NODE_ENV = 'production';
    return browserify({entries: './dev/app.js', extensions: ['.js']})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('dist'));
});


/**
gulp.task('watch', function () {
    var watching = false;
    gulp.start('build', function(){
      if(!watching){
        watching = true;
        gulp.watch('./dev/*.js', ['build']);
        nodemon({
          script:'server.js',
          watch:'dist'
        });
      }
    });
});
**/


gulp.task('nodemon', ['build'], function (cb) {
  var called = false;
  return nodemon({

    // nodemon our expressjs server
    script: 'server.js',

    // watch core server file(s) that require server restart on change
    watch: ['dist']
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY);
    });
});

gulp.task('browser-sync', ['nodemon'], function () {
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({
    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',
    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,
    // open the proxied app in chrome
    browser: ['google chrome']
  });
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch('./dev/*.js',['build', browserSync.reload]);
});
