const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = 3000;

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "public"), 
        filename: "index.js"
    },
    module:{
        rules: [
            {
                // babel
                test: /\.js$/,
                exclude: /node-modules/,
                use: [
                    {
                        loader: "babel-loader", 
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env', 
                                    {
                                        "targets": "defaults" 
                                    }
                                ],
                                '@babel/preset-react'
                            ]
                        }
                    }
                ]
            },
            // sass
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            // image files
            {
                test: /\.(png|jpe?g|gif)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port,
        historyApiFallback: true,
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    }
}