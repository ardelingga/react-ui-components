import type { Meta, StoryObj } from '@storybook/react-vite';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'multiple',
    children: (
      <>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
    ),
  },
};

export const Single: Story = {
  args: {
    type: 'single',
    defaultValue: 'center',
    children: (
      <>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['bold'],
    children: (
      <>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
    ),
  },
};

export const Outline: Story = {
  args: {
    type: 'multiple',
    variant: 'outline',
    children: (
      <>
        <ToggleGroupItem value="bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </>
    ),
  },
};

export const Sizes: Story = {
  args: {
    type: 'multiple',
  },
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <ToggleGroup type="multiple" size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Default</p>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <ToggleGroup type="multiple" size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const TextAlignment: Story = {
  args: {
    type: 'single',
  },
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Choose text alignment:</p>
      <ToggleGroup type="single" defaultValue="left">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const TextFormatting: Story = {
  args: {
    type: 'multiple',
  },
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Text formatting options:</p>
      <ToggleGroup type="multiple" variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
          <span className="ml-2">Bold</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
          <span className="ml-2">Italic</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
          <span className="ml-2">Underline</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};