import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from './Modal';
import { Button } from '../Button/Button';
import { Form, FormField, FormLabel, FormInput, FormTextarea } from '../Form/Form';
import { User, Trash2, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    isOpen: {
      control: { type: 'boolean' },
    },
    showCloseButton: {
      control: { type: 'boolean' },
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Modal
export const Default: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size={"xl"}
          title="Modal Title"
          description="This is a basic modal example"
        >
          <ModalBody>
            <p>This is the modal content. You can put any content here.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

// Simple Modal without header
export const Simple: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>Simple Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          showCloseButton={false}
          size={"md"}
        >
          <ModalBody>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Success!</h3>
              <p className="text-gray-600 mb-4">Your action has been completed successfully.</p>
              <Button onClick={() => setIsOpen(false)}>
                Got it
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  },
};

// Different Sizes
export const Sizes: Story = {
  args: { isOpen: false },
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const sizes = [
      { key: 'sm', label: 'Small' },
      { key: 'md', label: 'Medium' },
      { key: 'lg', label: 'Large' },
      { key: 'xl', label: 'Extra Large' },
      { key: '2xl', label: '2X Large' },
    ] as const;

    

    return (
      <>
        <div className="flex flex-row flex-wrap gap-2">
          {sizes.map(({ key, label }) => (
            <Button
              key={key}
              variant="secondary"
              onClick={() => setOpenModal(key)}
            >
              {label} Modal
            </Button>
          ))}
        </div>

        {sizes.map(({ key, label }) => (
          <Modal
            key={key}
            isOpen={openModal === key}
            onClose={() => setOpenModal(null)}
            title={`${label} Modal`}
            description={`This is a ${label.toLowerCase()} sized modal`}
            size={key}
            
          >
            <ModalBody>
              <p>This modal demonstrates the {label.toLowerCase()} size variant.</p>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setOpenModal(null)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        ))}
      </>
    );
  },
};

// Confirmation Modal
export const Confirmation: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
        >
          <ModalBody>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Item</h3>
              <p className="text-sm text-gray-500 mb-4">
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button variant="danger" onClick={() => setIsOpen(false)}>
                  Delete
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  },
};

// Warning Modal
export const Warning: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="warning" onClick={() => setIsOpen(true)}>
          Show Warning
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="md"
          showCloseButton={false}
        >
          <ModalBody>
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Unsaved Changes
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    You have unsaved changes. Are you sure you want to leave this page?
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="warning" onClick={() => setIsOpen(false)}>
                    Leave Page
                  </Button>
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Stay
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </>
    );
  },
};

// Form Modal
export const FormModal: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsOpen(false);
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          <User className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Edit Profile"
          description="Make changes to your profile here"
          size="lg"
        >
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              <div className="space-y-4">
                <FormField>
                  <FormLabel htmlFor="firstName" required>First Name</FormLabel>
                  <FormInput
                    id="firstName"
                    placeholder="Enter your first name"
                    defaultValue="John"
                  />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
                  <FormInput
                    id="lastName"
                    placeholder="Enter your last name"
                    defaultValue="Doe"
                  />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="email" required>Email</FormLabel>
                  <FormInput
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    defaultValue="john@example.com"
                  />
                </FormField>

                <FormField>
                  <FormLabel htmlFor="bio">Bio</FormLabel>
                  <FormTextarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    defaultValue="Software developer passionate about creating amazing user experiences."
                  />
                </FormField>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="secondary" type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Save Changes
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </>
    );
  },
};

// Long Content Modal
export const LongContent: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          Long Content Modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
          description="Please read our terms and conditions carefully"
        >
          <ModalBody>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem.
              </p>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};

// Non-dismissible Modal
export const NonDismissible: Story = {
  args: { isOpen: false },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="info" onClick={() => setIsOpen(true)}>
          Non-dismissible Modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Important Notice"
          description="This modal cannot be dismissed by clicking outside or pressing escape"
          closeOnOverlayClick={false}
          closeOnEscape={false}
          showCloseButton={false}
        >
          <ModalBody>
            <div className="flex">
              <Info className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">
                  This is a non-dismissible modal. You must click one of the buttons below to close it.
                  This is useful for critical actions that require user confirmation.
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setIsOpen(false)}>
              I Understand
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
};