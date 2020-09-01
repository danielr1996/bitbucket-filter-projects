'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');

const xpiName = 'bitbucket-filter-projects.xpi';

exports.default = () => (
    gulp.src('src/*')
        .pipe(zip(xpiName))
        .pipe(gulp.dest('dist'))
);
