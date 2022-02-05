const path = require("path");

const config = {

    entry: {
        index: './src/js/index.js',
    },

    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: `chmap-leaflet-extensions.js`,
        library: {
            name: "chmapLeafletExtensions",
            type: 'umd',
        }
    },

    externals: {
        bootstrap: true,
        leaflet: true,
    },

    // Define development options
    devtool: "source-map",

    performance: {
        hints: false,
    },

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                }
            },
        ],
    },


};


module.exports = (webpackEnv, argV) => {

    const isProduction = (argV.mode === "production");

    if (isProduction) {
        config.performance.hints = 'warning';
    }

    return config;
};
