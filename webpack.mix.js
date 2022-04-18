let mix = require('laravel-mix');

mix
    .js('src/js/app.js', 'js')
    .sass('src/scss/app.scss', 'css')
    .sourceMaps(false, 'source-map')
    .options({
        processCssUrls: false
    });