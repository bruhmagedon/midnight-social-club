import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

//* RTL - React Testing Libriary
describe('Button', () => {
    test('Test render', () => {
        // отрендерим изолировано один компонент
        render(<Button>TEST</Button>);
        // проверим статус её рендера (отрисовалась ли она)
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug(); // вывести компонент в дом дереве (в консоли)
    });
});
