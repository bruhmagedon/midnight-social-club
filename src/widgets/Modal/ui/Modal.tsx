import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean; // Статус открытия
    onClose?: () => void; // Хендлер закрытия
    lazy?: boolean; // C флагом lazy мы не монтируем модалку при загрузке страницы. Она монтируется только при нажатии на кнопку, когда isOpen = true
}

const ANIMATION_DELAY = 300;

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    lazy,
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false); // Момент закрытия модалки (для анимации закрытия)
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>; // Реф, чтобы очистить таймер (мутабельный реф)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    // Закрытие модалки при нажатии на оверлей
    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true); // Вызываем анимацию закрытия
            // Закрытие окно после delay в таймере
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    // При перерендере создаётся новая ссылка на функцию, будем мемоизировать
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            // Если нажали Escape - закрываем модальное одно
            if (e.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    useEffect(() => {
        // Закрытие окна по Esc
        if (isOpen) {
            // Если окно открыто, добавляем слушатель нажатия на кнопку
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current); // Важная очистка таймера
            window.removeEventListener('keydown', onKeyDown); // И очистка слушателя
        };
    }, [isOpen, onKeyDown]);

    const onContentClick = (e: React.MouseEvent) => {
        // Чтобы модальное окно не закрывалось при клике внутри (вне оверлея)
        e.stopPropagation(); // отменяет всплытие события (нажатие на родительский див / оверлей)
    };

    // Моды (условные стили)
    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    // Чтобы модалка монтировалась на страницу только при открытии (ну конечно если нам это надо)
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
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
        </Portal>
    );
};
