import { screen } from '@testing-library/react';
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
});
