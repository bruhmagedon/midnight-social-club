// файл для динамической настройки приложения до сборки

// мод сборки
export type BuildMode = "production" | "development";

// пути
export interface BuildPaths {
  entry: string; //до энтри поинта
  build: string; //до папки co сбокрой
  html: string; //до html к
  src: string; //путь до папки с исходным кодом
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
