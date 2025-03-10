import { getUserAuthData } from '_entities/User';
import { memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }
        return true;
    }), [isAuth]);
    return (
        <>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {/* Создаем роутер из конфига-маршрутов */}
                    {routes.map(({ path, element }) => (
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

export default memo(AppRouter);
