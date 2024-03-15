import { render, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        // отрендерим изолировано один компонент
        render(<Sidebar />);
        // проверим статус её рендера (отрисовалась ли она)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug(); // вывести компонент в дом дереве (в консоли)
    });
});
