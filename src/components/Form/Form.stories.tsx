import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  Form,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  FormHelperText
} from './Form';
import { Button } from '../Button/Button';
import { useState } from 'react';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card', 'minimal'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
  args: { onSubmit: fn() },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Form
export const Default: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };

    return (
      <Form onSubmit={handleSubmit} className="w-96">
        <div className="space-y-4">
          <FormField>
            <FormLabel htmlFor="email" required>Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </FormField>

          <FormField>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </FormField>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </div>
      </Form>
    );
  },
};

// Form Variants
export const Variants: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };

    return (
      <div className="space-y-8 w-96">
        {/* Default */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Default</h3>
          <Form variant="default" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormField>
                <FormLabel htmlFor="name1">Name</FormLabel>
                <FormInput id="name1" placeholder="Enter your name" />
              </FormField>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>

        {/* Card */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Card</h3>
          <Form variant="card" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormField>
                <FormLabel htmlFor="name2">Name</FormLabel>
                <FormInput id="name2" placeholder="Enter your name" />
              </FormField>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>

        {/* Minimal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Minimal</h3>
          <Form variant="minimal" onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="name3">Name</FormLabel>
              <FormInput id="name3" placeholder="Enter your name" />
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    );
  },
};

// Form with Validation
export const WithValidation: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      confirmPassword: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [success, setSuccess] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      const newErrors: Record<string, string> = {};
      const newSuccess: Record<string, string> = {};

      // Email validation
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      } else {
        newSuccess.email = 'Valid email format';
      }

      // Password validation
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      } else {
        newSuccess.password = 'Password strength: Good';
      }

      // Confirm password validation
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      } else if (formData.confirmPassword) {
        newSuccess.confirmPassword = 'Passwords match';
      }

      setErrors(newErrors);
      setSuccess(newSuccess);
    };

    return (
      <Form variant="card" size="md" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <FormField error={errors.email} success={success.email}>
            <FormLabel htmlFor="email" required>Email Address</FormLabel>
            <FormInput
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              success={!!success.email}
            />
            <FormHelperText>We'll never share your email with anyone else.</FormHelperText>
          </FormField>

          <FormField error={errors.password} success={success.password}>
            <FormLabel htmlFor="password" required>Password</FormLabel>
            <FormInput
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={!!errors.password}
              success={!!success.password}
            />
            <FormHelperText>Must be at least 6 characters long.</FormHelperText>
          </FormField>

          <FormField error={errors.confirmPassword} success={success.confirmPassword}>
            <FormLabel htmlFor="confirmPassword" required>Confirm Password</FormLabel>
            <FormInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={!!errors.confirmPassword}
              success={!!success.confirmPassword}
            />
          </FormField>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </Form>
    );
  },
};

// Complete Form Example
export const CompleteForm: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };

    return (
      <Form variant="card" size="lg" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <p className="text-sm text-gray-600 mb-4">Please fill in your personal details.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField>
              <FormLabel htmlFor="firstName" required>First Name</FormLabel>
              <FormInput id="firstName" placeholder="John" />
            </FormField>

            <FormField>
              <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
              <FormInput id="lastName" placeholder="Doe" />
            </FormField>
          </div>

          <FormField>
            <FormLabel htmlFor="email" required>Email Address</FormLabel>
            <FormInput id="email" type="email" placeholder="john@example.com" />
            <FormHelperText>We'll use this email for important notifications.</FormHelperText>
          </FormField>

          <FormField>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <FormInput id="phone" type="tel" placeholder="+1 (555) 123-4567" />
          </FormField>

          <FormField>
            <FormLabel htmlFor="country" required>Country</FormLabel>
            <FormSelect id="country">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="de">Germany</option>
            </FormSelect>
          </FormField>

          <FormField>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <FormTextarea
              id="bio"
              placeholder="Tell us about yourself..."
              rows={4}
            />
            <FormHelperText>Maximum 500 characters.</FormHelperText>
          </FormField>

          <div className="flex gap-4">
            <Button variant="secondary" type="button" className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Profile
            </Button>
          </div>
        </div>
      </Form>
    );
  },
};

// Inline Form Fields
export const InlineFields: Story = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };

    return (
      <Form onSubmit={handleSubmit} className="w-96">
        <div className="space-y-4">
          <FormField variant="inline">
            <FormLabel htmlFor="subscribe" className="w-32">Newsletter:</FormLabel>
            <input type="checkbox" id="subscribe" className="rounded" />
          </FormField>

          <FormField variant="inline">
            <FormLabel htmlFor="notifications" className="w-32">Notifications:</FormLabel>
            <FormSelect id="notifications" className="flex-1">
              <option value="all">All notifications</option>
              <option value="important">Important only</option>
              <option value="none">None</option>
            </FormSelect>
          </FormField>

          <FormField variant="inline">
            <FormLabel htmlFor="language" className="w-32">Language:</FormLabel>
            <FormSelect id="language" className="flex-1">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </FormSelect>
          </FormField>

          <Button type="submit" className="w-full">
            Save Preferences
          </Button>
        </div>
      </Form>
    );
  },
};

// Form Sizes
export const Sizes: Story = {
  render: () => {
    const sizes = [
      { key: 'sm', label: 'Small' },
      { key: 'md', label: 'Medium' },
      { key: 'lg', label: 'Large' },
      { key: 'xl', label: 'Extra Large' },
    ] as const;

    return (
      <div className="space-y-8">
        {sizes.map(({ key, label }) => (
          <div key={key}>
            <h3 className="text-lg font-semibold mb-4">{label} Form</h3>
            <Form variant="card" size={key}>
              <div className="space-y-4">
                <FormField>
                  <FormLabel htmlFor={`name-${key}`}>Name</FormLabel>
                  <FormInput id={`name-${key}`} placeholder="Enter your name" />
                </FormField>
                <FormField>
                  <FormLabel htmlFor={`email-${key}`}>Email</FormLabel>
                  <FormInput id={`email-${key}`} type="email" placeholder="Enter your email" />
                </FormField>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        ))}
      </div>
    );
  },
};