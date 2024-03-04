import ThemeProvider from "./ui/ThemeProvider";
import { useTheme } from "./lib/useTheme";

// public api в fsd (регулирует то, что мы выдаем наружу)
// внутри - относительные пути, наружу - абсолютные (до index.ts public-api файла)
export { ThemeProvider, useTheme };
