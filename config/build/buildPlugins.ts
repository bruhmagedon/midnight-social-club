import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // глобальные переменные для приложения
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify('test-value'),
        }),
        // обновление старницы без перезагрузки
        new webpack.HotModuleReplacementPlugin(),
    ];
}
