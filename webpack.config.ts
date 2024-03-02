// файл конфигурации webpack
import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

// конфигурация вебпак сборки
const config: webpack.Configuration = {
  mode: "development", //способ сборки
  //production mode - минифицирует код (маленький файл для отправки на клиент),
  //dev mode- для разработки
  entry: path.resolve(__dirname, "src", "index.ts"), //стартовая точка приложения (./src/index.ts)
  output: {
    // куда и как будет производиться сборка
    filename: "[name].[contenthash].js", //динамически кешированное название файла (для оптимизации под браузер)
    path: path.resolve(__dirname, "build"), //путь
    clean: true, //очистка лишних файлов
  },
  // плагины
  plugins: [
    new HTMLWebpackPlugin({
      // куда будут встраиваться js скрипты (формирование html )
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(), // отслеживание статуса сборки
  ],
  // для js
  module: {
    // обработка файлов за рамками js (лоудеры) (css, svg, ts и т.д.)
    rules: [
      {
        // файлы с расширение ts tsx
        test: /\.tsx?$/,
        // лоудер для таких файлов, их обработчик
        use: "ts-loader",
        // исключаем файлы в папке nodemodules
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // import Component from './component/ (не надо указывать расширение при импорте)
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
