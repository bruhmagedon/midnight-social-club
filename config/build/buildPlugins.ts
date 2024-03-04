import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      // куда будут встраиваться js скрипты (формирование html )
      template: paths.html,
    }),
    new webpack.ProgressPlugin(), // отслеживание статуса сборки
    // создает css файл для каждого js, для которого требуются стили
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css", //расположения файлов (кешированные)
      chunkFilename: "css/[name].[contenthash:8].css", //асихнронные чанки ?
    }),
  ];
}
