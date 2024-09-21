import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { paths, mode, isDev } = options;

    return {
        mode, // Режим сборки (development или production)
        entry: paths.entry, // Точка входа для сборки
        output: {
            filename: '[name].[contenthash].js', // Имя выходного файла с хешем содержимого
            path: paths.build, // Путь для выходных файлов
            clean: true, // Очищает директорию выходных файлов перед сборкой
        },
        plugins: buildPlugins(options), // Плагины
        module: {
            rules: buildLoaders(options), // Лоадеры
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined, // Source Maps для разработки
        devServer: isDev ? buildDevServer(options) : undefined, // DevServer для разработк
    };
}
