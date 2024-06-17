import { StoryObj, type Meta } from '@storybook/react';
import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    // decorators: [Story => Story()],
};

export default meta;
export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};

// TODO добавить все состояния в сторибук когда я с ним разберусь
