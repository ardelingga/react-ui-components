import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outlined', 'elevated', 'filled'],
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
    hoverable: {
      control: { type: 'boolean' },
    },
    clickable: {
      control: { type: 'boolean' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Default Card</h3>
        <p className="text-gray-600">This is a simple card with default styling.</p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlined Card</h3>
        <p className="text-gray-600">This card has a subtle border outline.</p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Elevated Card</h3>
        <p className="text-gray-600">This card has a shadow for elevation effect.</p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Filled Card</h3>
        <p className="text-gray-600">This card has a subtle background fill.</p>
      </div>
    ),
  },
};

// Interactive states
export const Hoverable: Story = {
  args: {
    variant: 'outlined',
    hoverable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Hoverable Card</h3>
        <p className="text-gray-600">Hover over this card to see the effect.</p>
      </div>
    ),
  },
};

export const Clickable: Story = {
  args: {
    variant: 'elevated',
    clickable: true,
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Clickable Card</h3>
        <p className="text-gray-600">This card responds to clicks.</p>
      </div>
    ),
  },
};

// Padding variants
export const SmallPadding: Story = {
  args: {
    variant: 'outlined',
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Padding</h3>
        <p className="text-gray-600">Compact card with small padding.</p>
      </div>
    ),
  },
};

export const LargePadding: Story = {
  args: {
    variant: 'outlined',
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Padding</h3>
        <p className="text-gray-600">Spacious card with large padding.</p>
      </div>
    ),
  },
};

// Complex content examples
export const WithHeaderAndFooter: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Card.Header>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Product Card</h3>
            <span className="text-sm text-gray-500">New</span>
          </div>
        </Card.Header>
        <Card.Content>
          <p className="text-gray-600 mb-4">
            This is a comprehensive card example with header, content, and footer sections.
          </p>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">Lightning Fast</p>
              <p className="text-sm text-gray-500">Optimized for performance</p>
            </div>
          </div>
        </Card.Content>
        <Card.Footer>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">$29.99</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const ProfileCard: Story = {
  args: {
    variant: 'outlined',
    hoverable: true,
    children: (
      <>
        <Card.Header>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </Card.Header>
        <Card.Content>
          <p className="text-gray-600 mb-4">
            Passionate developer with 5+ years of experience in React and TypeScript.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'TailwindCSS'].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <div className="flex space-x-2">
            <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Connect
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Message
            </button>
          </div>
        </Card.Footer>
      </>
    ),
  },
};

export const StatsCard: Story = {
  args: {
    variant: 'filled',
    children: (
      <div className="text-center">
        <div className="mb-4">
          <svg className="w-12 h-12 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">$12,345</h3>
        <p className="text-gray-600 mb-2">Total Revenue</p>
        <div className="flex items-center justify-center text-sm">
          <span className="text-green-600 font-medium">+12.5%</span>
          <span className="text-gray-500 ml-1">from last month</span>
        </div>
      </div>
    ),
  },
};