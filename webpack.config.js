const path = require('path');

module.exports = {
    entry: './site/src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'site/dist')
    },
    mode: 'production'
}