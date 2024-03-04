import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      /* Creates `style` nodes from JS strings
      "style-loader", */
      //чтобы css билдился отдельно, а не в js (оптимизация сборки)
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module")), //обработка файлов с расширением .module
            localIdentName: isDev //настройка хеш названий таких файлов
              ? "[path][name]__[local]--[hash:base64:5]" // src-components-Counter-module__btn--WJfas (читабельный хэш)
              : "[hash:base64:8]",
          },
        },
      },
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
