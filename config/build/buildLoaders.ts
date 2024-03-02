import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    // файлы с расширение ts tsx
    test: /\.tsx?$/,
    // лоудер для таких файлов, их обработчик
    use: "ts-loader",
    // исключаем файлы в папке nodemodules
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
