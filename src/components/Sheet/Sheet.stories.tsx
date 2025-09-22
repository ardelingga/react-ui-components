import type { Meta, StoryObj } from '@storybook/react-vite';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger 
} from './Sheet';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Menu, Settings, User, Bell } from 'lucide-react';

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Quick access to main sections
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4 mx-4">
          <Button variant="secondary" className="w-full justify-start">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromTop: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[300px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Recent notifications and updates
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-gray-600">2 minutes ago</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-gray-600">5 minutes ago</p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium">Reminder: Meeting at 3 PM</p>
              <p className="text-xs text-gray-600">10 minutes ago</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const FromBottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[400px]">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Frequently used actions and shortcuts
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <div className="grid grid-cols-3 gap-4">
            <Button variant="secondary" className="h-20 flex-col">
              <User className="h-6 w-6 mb-2" />
              Profile
            </Button>
            <Button variant="secondary" className="h-20 flex-col">
              <Settings className="h-6 w-6 mb-2" />
              Settings
            </Button>
            <Button variant="secondary" className="h-20 flex-col">
              <Bell className="h-6 w-6 mb-2" />
              Alerts
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const MobileMenu: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="sm">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader className="p-6 pb-4 border-b">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex-1 overflow-auto">
            <nav className="p-4 space-y-2">
              <Button variant="secondary" className="w-full justify-start h-12">
                Home
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                About
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Services
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Portfolio
              </Button>
              <Button variant="secondary" className="w-full justify-start h-12">
                Contact
              </Button>
            </nav>
          </div>
          <div className="p-4 border-t">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};