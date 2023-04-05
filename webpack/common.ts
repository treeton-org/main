import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const common = {
    entry: './index.tsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    context: path.resolve(__dirname, '../src'),
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: '../public/index.html.ejs'})]
}