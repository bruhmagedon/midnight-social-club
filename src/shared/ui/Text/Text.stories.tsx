import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title lorem ipsun',
    text: 'Title lorem ipsun',
    theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsun',
};
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Title lorem ipsun',
};
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Title lorem ipsun',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
