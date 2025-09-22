import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import React from "react";
import { RegisterPage, type RegisterFormData } from "./RegisterPage";

const meta = {
  title: "Pages/Authentication/RegisterPage",
  component: RegisterPage,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive registration page with form validation, password strength indicator, and social authentication options.",
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
    onRegister: fn(),
    onSignIn: fn(),
    onSocialLogin: fn(),
  },
} satisfies Meta<typeof RegisterPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Register Page
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
    error:
      "An account with this email already exists. Please use a different email or sign in.",
  },
};

// Validation Error
export const ValidationError: Story = {
  args: {
    loading: false,
    error: "Please correct the errors below and try again.",
  },
};

// Server Error
export const ServerError: Story = {
  args: {
    loading: false,
    error:
      "We are experiencing technical difficulties. Please try again later.",
  },
};
// Interactive Demo
export const InteractiveDemo: Story = {
  render: () => {
    const handleRegister = (data: RegisterFormData) => {
      console.log("Registration attempt:", data);
      alert(`Registration attempt for: ${data.email}`);
    };

    const handleSignIn = () => {
      console.log("Sign in clicked");
      alert("Redirecting to sign in page");
    };

    const handleSocialLogin = (provider: "google" | "github" | "apple") => {
      console.log("Social login:", provider);
      alert(`${provider} registration clicked`);
    };

    return React.createElement(RegisterPage, {
      onRegister: handleRegister,
      onSignIn: handleSignIn,
      onSocialLogin: handleSocialLogin,
    });
  },
};

// Success State
// Success State
export const SuccessDemo: Story = {
  render: () => {
    const handleRegister = () => {
      alert(
        "Account created successfully! Please check your email for verification."
      );
    };

    return React.createElement(RegisterPage, {
      onRegister: handleRegister,
      onSignIn: () => alert("Go to login"),
      onSocialLogin: (provider) => alert(`${provider} registration`),
    });
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

// Tablet View
export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
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
    (Story) =>
      React.createElement(
        "div",
        { className: "dark" },
        React.createElement(Story)
      ),
  ],
};
