var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var packCSS = require('css-mqpacker');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var autoprefixerOptions = require('./browsers');

gulp.task('sass', function () {

  var plugins = [
    autoprefixer(autoprefixerOptions),
    packCSS({ sort: true }),
    cssnano(({ autoprefixer: { browsers: autoprefixerOptions }}))
  ];

  var stream = gulp.src('src/stylesheets/*.scss')
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        outputStyle: 'expanded',
      })
        .on('error', sass.logError)
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));

  return stream;
});
