import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

// Список доступных приложению маршрутов
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

// Путь до каждого маршрута (Record - если добавим роут в enum, нужно обязательно добавить и путь сюда)
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

// Конфиг Роутов (путь + компонент)
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
