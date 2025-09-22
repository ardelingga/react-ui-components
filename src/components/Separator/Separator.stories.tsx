import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="rounded-lg border p-6 w-80">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-gray-600">
          Manage your account preferences and settings.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm">Email notifications</span>
          <span className="text-sm text-green-600">Enabled</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-sm">Two-factor auth</span>
          <span className="text-sm text-red-600">Disabled</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-sm">API access</span>
          <span className="text-sm text-green-600">Enabled</span>
        </div>
      </div>
    </div>
  ),
};