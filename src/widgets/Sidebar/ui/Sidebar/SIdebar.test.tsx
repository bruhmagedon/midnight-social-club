import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        // отрендерим изолировано один компонент (для теста)
        renderWithTranslation(<Sidebar />);
        // проверим статус её рендера (отрисовалась ли она)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug(); // вывести компонент в дом дереве (в консоли)
    });

    // Проверка кнопки toggle (сворачивание сайдбара)
    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn); // Кликнуть на кнопку
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
