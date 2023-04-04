import path from 'path'
import {config} from './common'

module.exports = {
    ...config,
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
}
