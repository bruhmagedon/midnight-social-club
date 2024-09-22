import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

//* RTL - React Testing Libriary
describe('Button', () => {
    test('Test render', () => {
        // отрендерим изолировано один компонент
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        // проверим статус её рендера (отрисовалась ли она)
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug(); // вывести компонент в дом дереве (в консоли)
    });
    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
