import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Form, FormField, FormLabel, FormInput } from '../../components/Form/Form';

import { Eye, EyeOff, Mail, Lock, Github, Chrome, Apple } from 'lucide-react';
import { cn } from '../../utils/utils';
import { Icon } from '../../components/Icon/Icon';

export interface LoginPageProps {
    onLogin?: (email: string, password: string) => void;
    onForgotPassword?: () => void;
    onSignUp?: () => void;
    onSocialLogin?: (provider: 'google' | 'github' | 'apple') => void;
    loading?: boolean;
    error?: string;
    className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({
    onLogin,
    onForgotPassword,
    onSignUp,
    onSocialLogin,
    loading = false,
    error,
    className,
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin?.(formData.email, formData.password);
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className={cn("min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", className)}>
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Icon iconNode={Lock} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Or{' '}
                        <button
                            type="button"
                            onClick={onSignUp}
                            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                        >
                            create a new account
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
                            Or continue with email
                        </span>
                    </div>
                </div>

                {/* Login Form */}
                <Form onSubmit={handleSubmit} className="space-y-6">
                    <FormField>
                        <FormLabel htmlFor="email" required>Email address</FormLabel>
                        <div className="relative">
                            <FormInput
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="pl-10"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon iconNode={Mail} className="h-5 w-5 text-gray-400" />
                            </div>
                        </div>
                    </FormField>

                    <FormField>
                        <FormLabel htmlFor="password" required>Password</FormLabel>
                        <div className="relative">
                            <FormInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                                className="pl-10 pr-10"
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
                    </FormField>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>

                        <button
                            type="button"
                            onClick={onForgotPassword}
                            className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
                        >
                            Forgot your password?
                        </button>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        loading={loading}
                        disabled={loading || !formData.email || !formData.password}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </Button>
                </Form>

                {/* Footer */}
                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>
                        By signing in, you agree to our{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};