import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      /* Creates `style` nodes from JS strings
      "style-loader", */
      //чтобы css билдился отдельно, а не в js (оптимизация сборки)
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  // Если не используем ts - нужен babel-loader
  const typescriptLoader = {
    // файлы с расширение ts tsx
    test: /\.tsx?$/,
    // лоудер для таких файлов, их обработчик
    use: "ts-loader",
    // исключаем файлы в папке nodemodules
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
