import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    apiUrl,
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
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
        // обновление старницы без перезагрузки
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
}
