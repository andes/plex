module.exports = {
    entry: "./webpack.entry.js",
    output: {
        path: __dirname + "/build",
        filename: "plex.js",
        publicPath: "/build/",
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
};