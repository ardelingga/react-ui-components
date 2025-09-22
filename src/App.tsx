import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'

// Import Components
import { Button } from './components/Button/Button';
import { Card, CardHeader, CardContent, CardFooter } from './components/Card/Card';
import { Badge } from './components/Badge/Badge';
import { Avatar } from './components/Avatar/Avatar';
import { Alert } from './components/Alert/Alert';
import { Input } from './components/Input/Input';
import { Label } from './components/Label/Label';
import { Modal, ModalBody, ModalFooter } from './components/Modal/Modal';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/Table/Table';
import { Icon } from './components/Icon/Icon';
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from './components/Breadcrumb/Breadcrumb';
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from './components/NavigationMenu/NavigationMenu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/Tooltip/Tooltip';

// Import Pages
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Home } from './pages/Home/Home';

// Import Icons
import {
  Github,
  ExternalLink,
  Eye,
  BookOpen,
  Layout,
  Layers,
  MousePointer,
  Type,
  Calendar,
  Heart,
  Coffee,
  SquareStackIcon
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  const componentCategories = [
    {
      title: 'Form Components',
      icon: Type,
      components: ['Button', 'Input', 'Label', 'Form', 'Checkbox', 'Select', 'Toggle']
    },
    {
      title: 'Layout Components',
      icon: Layout,
      components: ['Card', 'Modal', 'Sheet', 'Dialog', 'Separator', 'Collapsible']
    },
    {
      title: 'Navigation',
      icon: MousePointer,
      components: ['NavigationMenu', 'Breadcrumb', 'DropdownMenu', 'Tooltip']
    },
    {
      title: 'Data Display',
      icon: Layers,
      components: ['Table', 'Avatar', 'Badge', 'Alert', 'Skeleton']
    },
    {
      title: 'Feedback',
      icon: Calendar,
      components: ['Toast', 'Progress', 'Loading', 'Notification']
    }
  ];

  const pages = [
    {
      title: 'Home Page',
      description: 'Landing page with hero section and features',
      action: () => setActiveSection('home')
    },
    {
      title: 'Login Page',
      description: 'Authentication page with social login options',
      action: () => setShowLoginPage(true)
    },
    {
      title: 'Register Page',
      description: 'User registration with form validation',
      action: () => setShowRegisterPage(true)
    }
  ];

  if (showLoginPage) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button variant="secondary" onClick={() => setShowLoginPage(false)}>
            ← Back to Portfolio
          </Button>
        </div>
        <LoginPage
          onLogin={(email, password) => {
            console.log('Login:', { email, password });
            alert('Login demo - Check console for details');
          }}
          onForgotPassword={() => alert('Forgot password demo')}
          onSignUp={() => setShowRegisterPage(true)}
          onSocialLogin={(provider) => alert(`${provider} login demo`)}
        />
      </div>
    );
  }

  if (showRegisterPage) {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button variant="secondary" onClick={() => setShowRegisterPage(false)}>
            ← Back to Portfolio
          </Button>
        </div>
        <RegisterPage
          onRegister={(data) => {
            console.log('Register:', data);
            alert('Registration demo - Check console for details');
          }}
          onSignIn={() => setShowLoginPage(true)}
          onSocialLogin={(provider) => alert(`${provider} registration demo`)}
        />
      </div>
    );
  }

  if (activeSection === 'home') {
    return (
      <div>
        <div className="fixed top-4 left-4 z-50">
          <Button variant="secondary" onClick={() => setActiveSection('overview')}>
            ← Back to Portfolio
          </Button>
        </div>
        <Home />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon iconNode={SquareStackIcon} className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900 dark:text-white">UI Components</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button className='cursor-pointer' onClick={() => window.open('https://github.com/ardelingga/react-ui-components', '_blank')} variant="secondary" size="sm">
                  <Icon iconNode={Github} className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button className='cursor-pointer' onClick={() => window.open('https://ardelingga.github.io/react-ui-components/storybook', '_blank')} variant="secondary" size="sm">
                  <Icon iconNode={BookOpen} className="h-4 w-4 mr-2" />
                  Storybook
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center space-x-8 mb-8">
              <Tooltip>
                <TooltipTrigger>
                  <img src={viteLogo} className="h-16 w-16 hover:rotate-180 transition-transform duration-500" alt="Vite logo" />
                </TooltipTrigger>
                <TooltipContent>Built with Vite</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <img src={reactLogo} className="h-16 w-16 animate-spin hover:animate-pulse" alt="React logo" />
                </TooltipTrigger>
                <TooltipContent>Powered by React</TooltipContent>
              </Tooltip>
            </div>

            <h1 className="text-6xl font-bold dark:text-white mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              React UI Components
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive collection of modern, accessible, and customizable React components built with
              <Badge variant="secondary" className="mx-1">TypeScript</Badge> and
              <Badge variant="secondary" className="mx-1">Tailwind CSS</Badge>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button className='cursor-pointer' variant="secondary" size="lg" onClick={() => setShowModal(true)}>
                <Icon iconNode={Eye} className="h-5 w-5 mr-2" />
                View Components
              </Button>
              <Button className='cursor-pointer' variant="secondary" onClick={() => window.open('https://ardelingga.github.io/react-ui-components/storybook', '_blank')}>
                <Icon iconNode={ExternalLink} className="h-4 w-4 mr-2" />
                Open Storybook
              </Button>
              <Button onClick={() => window.open('https://github.com/ardelingga/react-ui-components', '_blank')} className='cursor-pointer' variant="secondary" size="lg">
                <Icon iconNode={Github} className="h-5 w-5 mr-2" />
                Source Code
              </Button>
            </div>
          </div>
        </section>


        {/* Component Categories */}
        <section className="py-2 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Component Library</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Organized into logical categories for easy discovery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {componentCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Icon iconNode={category.icon} className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.components.map((component, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sample Components Showcase */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Live Component Preview</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Buttons */}
                <Card>
                  <CardHeader>
                    <h4 className="font-semibold">Buttons</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button size="sm">Primary Button</Button>
                      <Button className='ml-2' variant="secondary" size="sm">Secondary</Button>
                      <Button className='ml-2' variant="secondary" size="sm">Outline</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Form Elements */}
                <Card>
                  <CardHeader>
                    <h4 className="font-semibold">Form Elements</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="demo-input">Email</Label>
                        <Input id="demo-input" placeholder="Enter email" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Data Display */}
                <Card>
                  <CardHeader>
                    <h4 className="font-semibold">Data Display</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Avatar />
                        <span className="text-sm">John Doe</span>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="default">Active</Badge>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pages Showcase */}
        <section className="py-20 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Complete Pages</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready-to-use page templates built with our component library
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pages.map((page, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{page.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{page.description}</p>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full cursor-pointer" onClick={page.action}>
                      <Icon iconNode={Eye} className="h-4 w-4 mr-2" />
                      View Page
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Icon iconNode={Heart} className="h-5 w-5 text-red-500" />
              <span>Made with love and</span>
              <Icon iconNode={Coffee} className="h-5 w-5 text-yellow-600" />
            </div>
            <p className="text-gray-400">
              Built with React, TypeScript, Tailwind CSS, and Storybook
            </p>
          </div>
        </footer>

        {/* Component Modal */}
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Component Library"
          description="Browse all available components"
          size="xl"
        >
          <ModalBody>
            <div className="space-y-6">
              <Alert>
                <Icon iconNode={BookOpen} className="h-4 w-4" />
                <div>
                  <h4 className="font-semibold">Storybook Documentation</h4>
                  <p className="text-sm">Each component includes comprehensive documentation and interactive examples.</p>
                </div>
              </Alert>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Button</TableCell>
                    <TableCell>Form</TableCell>
                    <TableCell><Badge variant="default">Stable</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Modal</TableCell>
                    <TableCell>Layout</TableCell>
                    <TableCell><Badge variant="default">Stable</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Table</TableCell>
                    <TableCell>Data Display</TableCell>
                    <TableCell><Badge variant="default">Stable</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button onClick={() => window.open('https://ardelingga.github.io/react-ui-components/storybook', '_blank')}>
              <Icon iconNode={ExternalLink} className="h-4 w-4 mr-2" />
              Open Storybook
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </TooltipProvider>
  );
}

export default App;