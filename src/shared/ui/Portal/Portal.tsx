import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode; // Что телепортируем
    element?: HTMLElement; // Куда телепортируем
}

// Фиксит конфликты со вложенными модальными окнами
export const Portal = ({ children, element = document.body }: PortalProps) => createPortal(children, element);
