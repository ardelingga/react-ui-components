import React from 'react';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import { Lightbulb, ExternalLink, Palette } from 'lucide-react';

type User = {
    name: string;
};

export const Home: React.FC = () => {
    const [user, setUser] = React.useState<User>();

    return (
        <article className="min-h-screen bg-white dark:bg-gray-900">
            <Header
                user={user}
                onLogin={() => setUser({ name: 'Jane Doe' })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: 'Jane Doe' })}
            />

            <section className="mx-auto px-5 py-12 max-w-2xl text-gray-700 dark:text-gray-300 text-sm leading-6 font-sans">
                {/* Main Heading */}
                <h2 className="inline-block align-top m-0 mb-1 font-bold text-3xl leading-none text-gray-900 dark:text-white">
                    Pages in Storybook
                </h2>

                {/* Introduction */}
                <p className="my-4">
                    We recommend building UIs with a{' '}
                    <a
                        href="https://componentdriven.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors"
                    >
                        <strong>component-driven</strong>
                    </a>{' '}
                    process starting with atomic components and ending with pages.
                </p>

                <p className="my-4">
                    Render pages with mock data. This makes it easy to build and review page states without
                    needing to navigate to them in your app. Here are some handy patterns for managing page
                    data in Storybook:
                </p>

                {/* Features List */}
                <ul className="my-4 pl-8 space-y-2">
                    <li className="mb-2">
                        Use a higher-level connected component. Storybook helps you compose such data from the
                        "args" of child component stories
                    </li>
                    <li className="mb-2">
                        Assemble data in the page component from your services. You can mock these services out
                        using Storybook.
                    </li>
                </ul>

                {/* Call to Action */}
                <p className="my-4">
                    Get a guided tutorial on component-driven development at{' '}
                    <a
                        href="https://storybook.js.org/tutorials/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors inline-flex items-center gap-1"
                    >
                        Storybook tutorials
                        <Icon iconNode={ExternalLink} className="h-3 w-3" />
                    </a>
                    . Read more in the{' '}
                    <a
                        href="https://storybook.js.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors inline-flex items-center gap-1"
                    >
                        docs
                        <Icon iconNode={ExternalLink} className="h-3 w-3" />
                    </a>
                    .
                </p>

                {/* Tip Section */}
                <div className="mt-10 mb-10 text-xs leading-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                            <div className="flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-800 rounded-full">
                                <Icon iconNode={Palette} className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="inline-block align-top mr-2 rounded-full bg-green-100 dark:bg-green-900 px-3 py-1 text-green-800 dark:text-green-200 font-bold text-xs leading-3">
                                💡 TIP
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                                Adjust the width of the canvas with the{' '}
                                <strong className="font-semibold text-gray-900 dark:text-white">Viewports addon</strong> in the toolbar
                            </span>
                        </div>
                    </div>
                </div>

                {/* Additional Content Sections */}
                <div className="space-y-8 mt-12">
                    {/* Getting Started Section */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Icon iconNode={Lightbulb} className="h-5 w-5 text-yellow-500" />
                            Getting Started
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            This page demonstrates how to build comprehensive UI documentation using Storybook.
                            Each component in this library includes multiple stories showing different states and use cases.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="primary" size="sm">
                                Explore Components
                            </Button>
                            <Button variant="secondary" size="sm">
                                <Icon iconNode={ExternalLink} className="mr-1 h-3 w-3" />
                                View Documentation
                            </Button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">🎨 Design System</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Consistent design tokens, components, and patterns for building modern web applications.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">🔧 Developer Experience</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                TypeScript support, comprehensive documentation, and interactive examples.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">📱 Responsive Design</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Mobile-first approach with responsive components that work across all device sizes.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">♿ Accessibility</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                WCAG compliant components with proper ARIA attributes and keyboard navigation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
};