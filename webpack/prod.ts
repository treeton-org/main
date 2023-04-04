import path from 'path'
import {merge} from 'webpack-merge'
import {common} from './common'

module.exports = merge<Object>(common, {
    mode: 'production',
    output: {
        filename: 'js/bundle.[contenthash].min.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
})
