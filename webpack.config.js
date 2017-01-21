var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/js/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "main.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
