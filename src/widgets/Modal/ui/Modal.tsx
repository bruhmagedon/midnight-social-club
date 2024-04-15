import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean; // Статус открытия
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(); // Реф, чтобы очистить таймер

    // Закрытие модалки при нажатии на оверлей
    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            // Закрытие окна по timeout
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    // При перерендере создаётся новая ссылка, будем мемоизировать
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        // Закрытие окна по Esc
        if (isOpen) {
            window.addEventListener('keypress', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keypress', onKeyDown);
        };
    }, [isOpen]);

    const onContentClick = (e: React.MouseEvent) => {
        // Чтобы модальное окно не закрывалось при клике внутри
        e.stopPropagation(); // отменяет всплытие события (нажатие на родительский див)
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div
                    className={classNames(cls.content)}
                    onClick={onContentClick}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
