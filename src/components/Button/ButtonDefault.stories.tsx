import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
    title: 'Components/Button/Default Buttons',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const DefaultShowcase: Story = {
//     args: {
//         children: 'Default Button',
//     },
//     render: () => (
//         <div className="flex flex-wrap items-center gap-3">
//             <Button variant="primary">Primary</Button>
//             <Button variant="secondary">Secondary</Button>
//             <Button variant="success">Success</Button>
//             <Button variant="info">Info</Button>
//             <Button variant="warning">Warning</Button>
//             <Button variant="danger">Danger</Button>
//             <Button variant="dark">Dark</Button>
//             <Button variant="light">Light</Button>
//             <Button variant="link">Link</Button>
//         </div>
//     ),
// };

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Success Button',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        children: 'Info Button',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning Button',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger Button',
    },
};

export const Dark: Story = {
    args: {
        variant: 'dark',
        children: 'Dark Button',
    },
};

export const Light: Story = {
    args: {
        variant: 'light',
        children: 'Light Button',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Link Button',
    },
};