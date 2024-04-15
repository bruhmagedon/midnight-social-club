import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { type FC, Suspense, useState } from 'react';
import { Modal } from 'widgets/Modal';

const App: FC = () => {
    const { theme } = useTheme(); // хук для темы

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Я ЕЬАТЫВАФЫ АФЫАФРЫЛАФРЫРЬФЫАФЫАФЫА
                </Modal>
                <Navbar />
                <button onClick={() => setIsOpen(true)}>togglemodal</button>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
