import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './Collapsible';
import { Button } from '../Button/Button';
import { ChevronDown, ChevronRight, Settings, Users, FileText } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            Collapsible with content
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" size="sm" className="w-9 p-0 cursor-pointer">
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 1
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 2
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Content 3
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const NavigationMenu: Story = {
  render: () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
      dashboard: false,
      users: false,
      content: false,
    });

    const toggleSection = (section: string) => {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    };

    return (
      <div className="w-[280px] space-y-1 p-2 border rounded-lg">
        <h3 className="px-3 py-2 text-lg font-semibold">Navigation</h3>

        {/* Dashboard Section */}
        <Collapsible open={openSections.dashboard} onOpenChange={() => toggleSection('dashboard')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Dashboard
              </div>
              {openSections.dashboard ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              Overview
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Analytics
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Reports
            </Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Users Section */}
        <Collapsible open={openSections.users} onOpenChange={() => toggleSection('users')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Users
              </div>
              {openSections.users ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              All Users
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Roles
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Permissions
            </Button>
          </CollapsibleContent>
        </Collapsible>

        {/* Content Section */}
        <Collapsible open={openSections.content} onOpenChange={() => toggleSection('content')}>
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="w-full justify-between p-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Content
              </div>
              {openSections.content ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-6 space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start mt-1">
              Posts
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Pages
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              Media
            </Button>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (id: string) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };

    const faqItems = [
      {
        id: 'item1',
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and is now maintained by Meta and the community.'
      },
      {
        id: 'item2',
        question: 'How do I get started with React?',
        answer: 'You can start with Create React App, Next.js, or Vite. Install Node.js, run the setup command, and start building your first component.'
      },
      {
        id: 'item3',
        question: 'What are React Hooks?',
        answer: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components. The most common hooks are useState and useEffect.'
      }
    ];

    return (
      <div className="w-[500px] space-y-2">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        {faqItems.map((item) => (
          <Collapsible key={item.id} open={openItems[item.id]} onOpenChange={() => toggleItem(item.id)}>
            <CollapsibleTrigger asChild>
              <Button variant="secondary" className="w-full justify-between p-4 h-auto text-left border rounded-lg">
                <span className="font-medium">{item.question}</span>
                {openItems[item.id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-4 pb-4">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};