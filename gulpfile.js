var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('copyIndex', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('./build'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('copyJs', function() {
	gulp.src('src/**/*.js*')
	    .pipe(gulp.dest('./build'))
	    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watchFiles', function() {
	gulp.watch('src/index.html', ['copyIndex']);
	gulp.watch('src/**/*.js*', ['copyJs']);
});

gulp.task('default', ['copyIndex', 'copyJs', 'browserSync', 'watchFiles']);