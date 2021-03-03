const rename=require("gulp-rename");
const concat=require("gulp-concat");
const gulpif=require("gulp-if");
const processhtml=require("gulp-processhtml");
const pleeease=require("gulp-pleeease");
const sass=require("gulp-dart-scss");
const {src,dest,series,parallel}=require("gulp");
const { basename }=require("path");




function compila(){
    return src("scss/main.scss")
    .pipe(sass())
    .pipe(pleeease())
    .pipe(rename(
        {
            suffix:".min",
            extname:".css"
        }
    ))
    .pipe(dest("proyecto/css"));
}

function mover(){
    return src("../Mi_tema/node_modules/bootstrap/dist/js/*")
    .pipe(dest("proyecto/js"));
}
var options={
    overwrite:true
}
function procesar_html(){
    return src("./index.html")
    .pipe(processhtml())
    .pipe(dest("./proyecto",options));
}

exports.compila=compila;
exports.mover=mover;
exports.procesar_html=procesar_html;
exports.default=parallel(compila,mover,procesar_html);