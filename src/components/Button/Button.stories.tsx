import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Components/Button/All Variants',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// All Color Variants Showcase
export const AllVariants: Story = {
  args: {
    children: 'All Variants',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="light">Light</Button>
    </div>
  ),
};

// Individual Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Dark',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

// Size Variants
export const AllSizes: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

// States
export const LoadingState: Story = {
  args: {
    variant: 'primary',
    children: 'Loading...',
    loading: true,
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
};