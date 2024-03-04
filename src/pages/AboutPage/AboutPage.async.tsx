import { lazy } from "react";

// ленивая подгрузка чанка
export const AboutPageAsync = lazy(() => import("./AboutPage"));
