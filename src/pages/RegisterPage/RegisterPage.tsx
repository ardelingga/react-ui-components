import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Form, FormField, FormLabel, FormInput } from '../../components/Form/Form';

import { Eye, EyeOff, Mail, Lock, User, Github, Chrome, Apple } from 'lucide-react';
import { cn } from '../../utils/utils';
import { Icon } from '../../components/Icon/Icon';

export interface RegisterPageProps {
    onRegister?: (data: RegisterFormData) => void;
    onSignIn?: () => void;
    onSocialLogin?: (provider: 'google' | 'github' | 'apple') => void;
    loading?: boolean;
    error?: string;
    className?: string;
}

export interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
    newsletter: boolean;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
    onRegister,
    onSignIn,
    onSocialLogin,
    loading = false,
    error,
    className,
}) => {
    const [formData, setFormData] = useState<RegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
        newsletter: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const errors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            errors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
        }

        setValidationErrors({});
        onRegister?.(formData);
    };

    const handleInputChange = (field: keyof RegisterFormData, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear validation error when user starts typing
        if (validationErrors[field]) {
            setValidationErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const getPasswordStrength = (password: string) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const passwordStrength = getPasswordStrength(formData.password);

    return (
        <div className={cn("min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", className)}>
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <Icon iconNode={User} className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                        Create your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={onSignIn}
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                        >
                            Sign in here
                        </button>
                    </p>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md text-sm">
                        {error}
                    </div>
                )}

                {/* Social Login */}
                <div className="space-y-3">
                    <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => onSocialLogin?.('google')}
                        disabled={loading}
                    >
                        <Icon iconNode={Chrome} className="mr-2 h-4 w-4" />
                        Continue with Google
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            variant="secondary"
                            onClick={() => onSocialLogin?.('github')}
                            disabled={loading}
                        >
                            <Icon iconNode={Github} className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => onSocialLogin?.('apple')}
                            disabled={loading}
                        >
                            <Icon iconNode={Apple} className="mr-2 h-4 w-4" />
                            Apple
                        </Button>
                    </div>
                </div>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                            Or register with email
                        </span>
                    </div>
                </div>

                {/* Register Form */}
                <Form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                        <FormField error={validationErrors.firstName}>
                            <FormLabel htmlFor="firstName" required>First name</FormLabel>
                            <FormInput
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                required
                                placeholder="John"
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                error={!!validationErrors.firstName}
                            />
                        </FormField>

                        <FormField error={validationErrors.lastName}>
                            <FormLabel htmlFor="lastName" required>Last name</FormLabel>
                            <FormInput
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                required
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                error={!!validationErrors.lastName}
                            />
                        </FormField>
                    </div>

                    {/* Email */}
                    <FormField error={validationErrors.email}>
                        <FormLabel htmlFor="email" required>Email address</FormLabel>
                        <div className="relative">
                            <FormInput
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="pl-10"
                                error={!!validationErrors.email}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon iconNode={Mail} className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </FormField>

                    {/* Password */}
                    <FormField error={validationErrors.password}>
                        <FormLabel htmlFor="password" required>Password</FormLabel>
                        <div className="relative">
                            <FormInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                placeholder="Create a strong password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                className="pl-10 pr-10"
                                error={!!validationErrors.password}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon iconNode={Lock} className="h-5 w-5 text-gray-400" />
                            </div>
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <Icon
                                    iconNode={showPassword ? EyeOff : Eye}
                                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                                />
                            </button>
                        </div>

                        {/* Password Strength */}
                        {formData.password && (
                            <div className="mt-2">
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((level) => (
                                        <div
                                            key={level}
                                            className={cn(
                                                "h-1 flex-1 rounded-full",
                                                passwordStrength >= level
                                                    ? passwordStrength <= 2
                                                        ? "bg-red-500"
                                                        : passwordStrength <= 3
                                                            ? "bg-yellow-500"
                                                            : "bg-green-500"
                                                    : "bg-gray-200 dark:bg-gray-700"
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    Password strength: {
                                        passwordStrength <= 2 ? 'Weak' :
                                            passwordStrength <= 3 ? 'Medium' : 'Strong'
                                    }
                                </p>
                            </div>
                        )}
                    </FormField>

                    {/* Confirm Password */}
                    <FormField error={validationErrors.confirmPassword}>
                        <FormLabel htmlFor="confirmPassword" required>Confirm password</FormLabel>
                        <div className="relative">
                            <FormInput
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                                className="pl-10 pr-10"
                                error={!!validationErrors.confirmPassword}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon iconNode={Lock} className="h-5 w-5 text-gray-400" />
                            </div>
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <Icon
                                    iconNode={showConfirmPassword ? EyeOff : Eye}
                                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                                />
                            </button>
                        </div>
                    </FormField>

                    {/* Terms and Newsletter */}
                    <div className="space-y-4">
                        <FormField error={validationErrors.agreeToTerms}>
                            <div className="flex items-start">
                                <input
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    type="checkbox"
                                    checked={formData.agreeToTerms}
                                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                                />
                                <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                    I agree to the{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        Terms and Conditions
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>
                        </FormField>

                        <div className="flex items-center">
                            <input
                                id="newsletter"
                                name="newsletter"
                                type="checkbox"
                                checked={formData.newsletter}
                                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                Send me news and updates
                            </label>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        loading={loading}
                        disabled={loading}
                    >
                        {loading ? 'Creating account...' : 'Create account'}
                    </Button>
                </Form>
            </div>
        </div>
    );
};