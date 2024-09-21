import { type Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#e8e8ea',
                },
                {
                    name: 'dark',
                    value: '#090949',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
