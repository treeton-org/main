import {merge} from 'webpack-merge'
import {common} from './common'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'

module.exports = merge<Object>(common, {
    mode: 'development',
    devServer: {
        hot: true,
        historyApiFallback: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [new ReactRefreshPlugin()]
})