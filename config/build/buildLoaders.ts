import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
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
