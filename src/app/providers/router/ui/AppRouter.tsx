import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Suspense fallback={<div>Spinner//</div>}>
                <Routes>
                    {/* Создаем роутер из конфига-маршрутов */}
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <div className="page-wrapper">{element}</div>
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRouter;
