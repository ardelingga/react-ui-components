import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import React from "react";
import { LoginPage } from "./LoginPage";

const meta = {
  title: "Pages/Authentication/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete login page with social authentication options, form validation, and responsive design.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    loading: {
      control: { type: "boolean" },
    },
    error: {
      control: { type: "text" },
    },
  },
  args: {
    onLogin: fn(),
    onForgotPassword: fn(),
    onSignUp: fn(),
    onSocialLogin: fn(),
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Login Page
export const Default: Story = {
  args: {
    loading: false,
  },
};

// Loading State
export const Loading: Story = {
  args: {
    loading: true,
  },
};

// With Error
export const WithError: Story = {
  args: {
    loading: false,
    error: "Invalid email or password. Please try again.",
  },
};

// Network Error
export const NetworkError: Story = {
  args: {
    loading: false,
    error:
      "Unable to connect to server. Please check your internet connection.",
  },
};

// Account Locked Error
export const AccountLocked: Story = {
  args: {
    loading: false,
    error:
      "Your account has been temporarily locked due to multiple failed login attempts. Please try again in 15 minutes.",
  },
};

// Interactive Demo
export const InteractiveDemo: Story = {
  args: {
    onLogin: fn((email: string, password: string) => {
      console.log("Login attempt:", { email, password });
      alert(`Login attempt with email: ${email}`);
    }),
    onForgotPassword: fn(() => {
      console.log("Forgot password clicked");
      alert("Forgot password clicked");
    }),
    onSignUp: fn(() => {
      console.log("Sign up clicked");
      alert("Redirecting to sign up page");
    }),
    onSocialLogin: fn((provider: "google" | "github" | "apple") => {
      console.log("Social login:", provider);
      alert(`${provider} login clicked`);
    }),
  },
};

// Mobile View
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    loading: false,
  },
};

// Dark Mode
export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    loading: false,
  },
  decorators: [
    (Story) => React.createElement(
      "div",
      { className: "dark" },
      React.createElement(Story)
    ),
  ],
};
