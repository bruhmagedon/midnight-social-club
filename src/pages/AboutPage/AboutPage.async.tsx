import { lazy } from "react";

// ленивая подгрузка чанка (code-splitting)
export const AboutPageAsync = lazy(() => import("./AboutPage"));
