import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const WithIcon: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Bold',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <Italic className="h-4 w-4" />,
    'aria-label': 'Italic',
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: <Bold className="h-4 w-4" />,
    'aria-label': 'Bold',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle size="default">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg">
        <Underline className="h-5 w-5" />
      </Toggle>
    </div>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};