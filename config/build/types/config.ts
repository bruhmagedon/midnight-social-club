// файл для динамической настройки приложения до сборки

// мод сборки
export type BuildMode = "production" | "development";

// пути
export interface BuildPaths {
  entry: string; //до энтри поинта
  build: string; //до папки co сбокрой
  html: string; //до html к
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}
