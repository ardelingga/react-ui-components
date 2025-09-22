import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import {
  Heart,
  Star,
  Home,
  User,
  Settings,
  Search,
  Bell,
  Mail,
  Calendar,
  Download,
  Upload,
  Edit,
  Trash2,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Info
} from 'lucide-react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconNode: {
      description: 'The Lucide icon component to display',
      control: false,
    },
    className: {
      description: 'Additional CSS classes to apply',
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconNode: Heart,
    className: 'w-6 h-6 text-red-500',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon iconNode={Star} className="w-4 h-4 text-yellow-500" />
      <Icon iconNode={Star} className="w-6 h-6 text-yellow-500" />
      <Icon iconNode={Star} className="w-8 h-8 text-yellow-500" />
      <Icon iconNode={Star} className="w-12 h-12 text-yellow-500" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon iconNode={Home} className="w-6 h-6 text-blue-500" />
      <Icon iconNode={User} className="w-6 h-6 text-gray-500" />
      <Icon iconNode={Trash2} className="w-6 h-6 text-red-500" />
      <Icon iconNode={Check} className="w-6 h-6 text-green-500" />
      <Icon iconNode={AlertTriangle} className="w-6 h-6 text-yellow-500" />
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Home} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={User} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">User</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Settings} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Settings</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Search} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Bell} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Bell</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Mail} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Mail</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Calendar} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Calendar</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Download} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Download</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Upload} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Upload</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Edit} className="w-6 h-6 text-gray-700" />
        <span className="text-xs">Edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Trash2} className="w-6 h-6 text-red-500" />
        <span className="text-xs">Delete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon iconNode={Check} className="w-6 h-6 text-green-500" />
        <span className="text-xs">Check</span>
      </div>
    </div>
  ),
};

export const ActionIcons: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-4 border rounded-lg">
      <Icon iconNode={Plus} className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
      <Icon iconNode={Minus} className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
      <Icon iconNode={Check} className="w-5 h-5 cursor-pointer hover:text-green-600 transition-colors text-green-500" />
      <Icon iconNode={X} className="w-5 h-5 cursor-pointer hover:text-red-600 transition-colors text-red-500" />
      <Icon iconNode={ArrowLeft} className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
      <Icon iconNode={ArrowRight} className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
    </div>
  ),
};

export const StatusIcons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon iconNode={Check} className="w-5 h-5 text-green-500" />
        <span className="text-sm">Success - Task completed</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon iconNode={AlertTriangle} className="w-5 h-5 text-yellow-500" />
        <span className="text-sm">Warning - Please review</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon iconNode={X} className="w-5 h-5 text-red-500" />
        <span className="text-sm">Error - Something went wrong</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon iconNode={Info} className="w-5 h-5 text-blue-500" />
        <span className="text-sm">Info - Additional information</span>
      </div>
    </div>
  ),
};

export const InteractiveButtons: Story = {
  render: () => (
    <div className="flex gap-2">
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <Icon iconNode={Heart} className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <Icon iconNode={Star} className="w-5 h-5 text-gray-600 hover:text-yellow-500 transition-colors" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <Icon iconNode={Download} className="w-5 h-5 text-gray-600 hover:text-blue-500 transition-colors" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
        <Icon iconNode={Settings} className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors" />
      </button>
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    iconNode: null,
    className: 'w-6 h-6',
  },
};

export const CustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Icon iconNode={Star} className="w-8 h-8 text-yellow-400 drop-shadow-lg" />
        <span>With drop shadow</span>
      </div>
      <div className="flex items-center gap-4">
        <Icon iconNode={Heart} className="w-8 h-8 text-red-500 animate-pulse" />
        <span>With pulse animation</span>
      </div>
      <div className="flex items-center gap-4">
        <Icon iconNode={Settings} className="w-8 h-8 text-blue-500 hover:rotate-90 transition-transform duration-300" />
        <span>With rotation on hover</span>
      </div>
    </div>
  ),
};