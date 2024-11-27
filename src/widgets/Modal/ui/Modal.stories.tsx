import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'widget/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi modi, placeat consectetur cum optio ut adipisci perspiciatis corrupti. Porro sunt earum repellendus veritatis architecto ipsum, voluptatum velit quod quaerat?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi modi, placeat consectetur cum optio ut adipisci perspiciatis corrupti. Porro sunt earum repellendus veritatis architecto ipsum, voluptatum velit quod quaerat?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
