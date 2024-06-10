import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

// export const Large: Story = {
//     args: {},
// };

// export const Small: Story = {
//     args: {},
// };
