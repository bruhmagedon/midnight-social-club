import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
// import { BuildOptions } from "config/build/types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      // куда будут встраиваться js скрипты (формирование html )
      template: paths.html,
    }),
    new webpack.ProgressPlugin(), // отслеживание статуса сборки
  ];
}
