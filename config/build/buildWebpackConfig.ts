import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

// принимает опции сборки
export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode, //способ сборки
    //production mode - минифицирует код (маленький файл для отправки на клиент),
    //dev mode- для разработки
    entry: paths.entry, //стартовая точка приложения (./src/index.ts)
    output: {
      // куда и как будет производиться сборка
      filename: "[name].[contenthash].js", //динамически кешированное название файла (для оптимизации под браузер)
      path: paths.build, //путь
      clean: true, //очистка лишних файлов
    },
    // плагины
    plugins: buildPlugins(options),
    // для js
    module: {
      // обработка файлов за рамками js (лоудеры) (css, svg, ts и т.д.)
      rules: buildLoaders(options),
    },
    // import Component from './component/ (не надо указывать расширение при импорте)
    resolve: buildResolvers(options),
    // действия, доступные только во время продакшена
    devtool: isDev ? "inline-source-map" : undefined, //где в коде произошла ошибка
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
