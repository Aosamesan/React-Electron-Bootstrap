
import '@babel/polyfill'
import gulp from 'gulp'
import babel from 'gulp-babel'
import gulpDom from 'gulp-dom'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config'


const convertMarkup = () => {
    return gulp.src('./public/index.html')
                .pipe(gulpDom(function() {
                    let electronScriptDOM = this.createElement('script')
                    electronScriptDOM.src = "./bundle.js"

                    return this.getElementsByTagName('body')[0]
                        .appendChild(electronScriptDOM)
                }))
                .pipe(gulp.dest('./electron-public'))
}

const transpile = () => {
    return gulp.src('src/**/*.js')
                .pipe(babel({
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }))
                .pipe(gulp.dest("./transpiled"))
}

const webpackTranspiled = () => {
    return gulp.src('./transpiled/index.js')
                .pipe(webpack(webpackConfig))
                .pipe(gulp.dest('./electron-public'))

}

const bootstrapScript = () => {
    return gulp.src(['./node_modules/jquery/dist/jquery.slim.min.js', './node_modules/popper.js/dist/umd/popper.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'])
                .pipe(gulp.dest('./public/js'))
                .pipe(gulp.dest('./electron-public/js'))
}

const bootstrapStylesheet = () => {
    return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
                .pipe(gulp.dest('./public/css'))
                .pipe(gulp.dest('./electron-public/css'))
}

const bootstrap = gulp.parallel(bootstrapScript, bootstrapStylesheet)

gulp.task('react-webpack', gulp.parallel(convertMarkup, bootstrap, gulp.series(transpile, webpackTranspiled)))