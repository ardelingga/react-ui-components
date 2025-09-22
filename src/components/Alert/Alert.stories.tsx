import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle, AlertDescription } from './Alert';
import {
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  Smile,
  Clock,
  Link,
  Trash2
} from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary', 'secondary', 'success', 'warning', 'info', 'danger',
        'primary-outline', 'secondary-outline', 'success-outline', 'warning-outline', 'info-outline', 'danger-outline',
        'primary-solid', 'secondary-solid', 'success-solid', 'warning-solid', 'info-solid', 'danger-solid'
      ],
    },
    style: {
      control: { type: 'select' },
      options: ['default', 'left-border'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    dismissible: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Alerts
export const DefaultAlerts: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        This is a Danger alert
      </Alert>
    </div>
  ),
};

// Outline Alerts
export const OutlineAlerts: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary-outline" dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary-outline" dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success-outline" dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning-outline" dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info-outline" dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger-outline" dismissible>
        This is a Danger alert
      </Alert>
    </div>
  ),
};

// Solid Alerts
export const SolidAlerts: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Alert variant="primary-solid" dismissible>
            This is a Primary alert
          </Alert>
          <Alert className='mt-4' variant="success-solid" dismissible>
            This is a Success alert
          </Alert>
          <Alert className='mt-4' variant="info-solid" dismissible>
            This is a Info alert
          </Alert>
        </div>
        <div className="space-y-4">
          <Alert variant="secondary-solid" dismissible>
            This is a Secondary alert
          </Alert>
          <Alert className='mt-4' variant="warning-solid" dismissible>
            This is a Warning alert
          </Alert>
          <Alert className='mt-4' variant="danger-solid" dismissible>
            This is a Danger alert
          </Alert>
        </div>
      </div>
    </div>
  ),
};

// Alerts with Icons
export const AlertsWithIcons: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" icon={<Smile />} dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" icon={<Smile />} dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" icon={<CheckCircle />} dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" icon={<AlertTriangle />} dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" icon={<Info />} dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" icon={<Trash2 />} dismissible>
        This is a Danger alert
      </Alert>
    </div>
  ),
};

// Left Border Alerts
export const LeftBorderAlerts: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" style="left-border" icon={<Smile />} dismissible>
        This is a Primary alert
      </Alert>
      <Alert className='mt-4' variant="secondary" style="left-border" icon={<Smile />} dismissible>
        This is a Secondary alert
      </Alert>
      <Alert className='mt-4' variant="success" style="left-border" icon={<CheckCircle />} dismissible>
        This is a Success alert
      </Alert>
      <Alert className='mt-4' variant="warning" style="left-border" icon={<AlertTriangle />} dismissible>
        This is a Warning alert
      </Alert>
      <Alert className='mt-4' variant="info" style="left-border" icon={<Link />} dismissible>
        This is a Info alert
      </Alert>
      <Alert className='mt-4' variant="danger" style="left-border" icon={<Trash2 />} dismissible>
        This is a Danger alert
      </Alert>
    </div>
  ),
};

// Alerts with Description
export const AlertsWithDescription: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        <div>
          <AlertTitle>This is a Primary alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        <div>
          <AlertTitle>This is a Success alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        <div>
          <AlertTitle>This is a Warning alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        <div>
          <AlertTitle>This is a Danger alert</AlertTitle>
          <AlertDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </AlertDescription>
        </div>
      </Alert>
    </div>
  ),
};

// Alerts with Icons and Description
export const AlertsWithIconsAndDescription: Story = {
  render: () => (
    <div className="w-full max-w-2xl space-y-4">
      <Alert variant="primary" dismissible>
        <div className="flex items-start gap-2">
          <Smile className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Primary alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="success" dismissible>
        <div className="flex items-start gap-2">
          <CheckCircle className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Success alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="warning" dismissible>
        <div className="flex items-start gap-2">
          <Clock className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Warning alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
      <Alert className='mt-4' variant="danger" dismissible>
        <div className="flex items-start gap-2">
          <Trash2 className="text-xl mt-1.5 shrink-0" size={20} />
          <div className="flex-1">
            <AlertTitle>This is a Danger alert</AlertTitle>
            <AlertDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  ),
};

// Individual Stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'This is a primary alert',
    dismissible: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert',
    dismissible: true,
    icon: <CheckCircle />,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'This is a warning alert',
    dismissible: true,
    icon: <AlertTriangle />,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'This is a danger alert',
    dismissible: true,
    icon: <XCircle />,
  },
};