# React UI Components

> A comprehensive, modern React component library built with TypeScript, Tailwind CSS, and Storybook for professional web applications.

<div align="center">

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue?logo=tailwindcss)
![Storybook](https://img.shields.io/badge/Storybook-7.x-pink?logo=storybook)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)

<div align="center" style="margin: 24px 0;">
  <a href="https://ardelingga.github.io/react-ui-components/" style="font-size:2rem; font-weight:bold; color:#2563eb; text-decoration:none; margin-right:24px;">
    🚀 Live Demo
  </a>
  <a href="https://ardelingga.github.io/react-ui-components/storybook/" style="font-size:2rem; font-weight:bold; color:#db2777; text-decoration:none;">
    📚 Storybook
  </a>
</div>

</div>

## ✨ Features

- 🎨 **25+ Production-Ready Components** - Comprehensive component library
- 🔧 **Full TypeScript Support** - Type-safe development experience
- 🎭 **Dark Mode Ready** - Built-in dark mode support
- 📱 **Responsive Design** - Mobile-first approach
- ♿ **Accessibility First** - WCAG compliant components
- 📚 **Comprehensive Documentation** - Detailed Storybook stories
- 🚀 **Performance Optimized** - Tree-shakeable and lightweight
- 🎪 **Customizable** - Easy to theme and extend

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/ardelingga/react-ui-components.git
cd react-ui-components

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build for production
npm run build
```

## 📦 Component Library

### 🎛️ Form Components

- **Button** - Multiple variants with loading states
- **Input** - Text inputs with validation styling
- **Label** - Form labels with required indicators
- **Form** - Complete form system with validation
- **Checkbox** - Custom styled checkboxes
- **Select** - Dropdown select component
- **Toggle** - Switch toggle component
- **ToggleGroup** - Grouped toggle selections

### 🗂️ Layout Components

- **Card** - Flexible card container with sections
- **Modal** - Dialog modals with animations
- **Sheet** - Slide-out panels
- **Dialog** - Confirmation and alert dialogs
- **Collapsible** - Expandable content areas
- **Separator** - Content dividers

### 🧭 Navigation Components

- **NavigationMenu** - Multi-level navigation with dropdowns
- **Breadcrumb** - Hierarchical navigation
- **DropdownMenu** - Context menus and dropdowns

### 📊 Data Display Components

- **Table** - Sortable tables with responsive design
- **Avatar** - User avatars with fallbacks
- **Badge** - Status indicators and labels
- **Alert** - Notification and alert messages
- **Skeleton** - Loading state placeholders

### 💬 Feedback Components

- **Tooltip** - Contextual information tooltips
- **Icon** - Lucide React icon integration

### 📄 Complete Pages

- **Home Page** - Landing page with hero section
- **Login Page** - Authentication with social login
- **Register Page** - User registration with validation

## 💡 Usage Examples

### Basic Button Usage

```tsx
import { Button } from './components/Button/Button';

// Primary button
<Button variant="primary" size="md">
  Save Changes
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// With icon
<Button variant="outline">
  <Icon iconNode={Download} className="mr-2 h-4 w-4" />
  Download
</Button>
```

### Card Component

```tsx
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./components/Card/Card";

<Card className="w-full max-w-md">
  <CardHeader>
    <h3 className="text-lg font-semibold">Product Card</h3>
  </CardHeader>
  <CardContent>
    <p>Detailed product description goes here.</p>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>;
```

### Form Components

```tsx
import { Form, FormField, FormLabel, FormInput } from "./components/Form/Form";

<Form onSubmit={handleSubmit}>
  <FormField>
    <FormLabel htmlFor="email" required>
      Email
    </FormLabel>
    <FormInput
      id="email"
      type="email"
      placeholder="Enter your email"
      required
    />
  </FormField>
  <Button type="submit">Submit</Button>
</Form>;
```

### Data Table

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./components/Table/Table";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead sortable onSort={() => handleSort("name")}>
        Name
      </TableHead>
      <TableHead sortable onSort={() => handleSort("email")}>
        Email
      </TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Badge variant={user.active ? "success" : "secondary"}>
            {user.active ? "Active" : "Inactive"}
          </Badge>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>;
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Alert/
│   │   ├── Alert.tsx
│   │   └── Alert.stories.tsx
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.stories.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.stories.tsx
│   └── ... (other components)
├── pages/
│   ├── Home/
│   ├── LoginPage/
│   └── RegisterPage/
├── lib/
│   └── utils.ts
├── App.tsx
└── main.tsx
```

## 🧪 Testing & Documentation

### Storybook Stories

Every component includes comprehensive Storybook stories:

- Default states
- All variants and sizes
- Interactive examples
- Responsive previews
- Accessibility testing
- Dark mode examples

```bash
# Run Storybook
npm run storybook
```

## 🚀 Deployment

### Build Commands

```bash
# Production build
npm run build

# Preview build locally
npm run preview

# Build Storybook
npm run build-storybook
```

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start dev server
npm run storybook        # Start Storybook

# Building
npm run build            # Build for production
npm run build-storybook  # Build Storybook

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Include Storybook stories for new components
- Maintain responsive design principles
- Ensure accessibility compliance
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ardelingga Pramesta Kusuma**

- GitHub: [@ardelingga](https://github.com/ardelingga)
- LinkedIn: [Ardelingga Pramesta Kusuma](https://linkedin.com/in/ardelingga)
- Portfolio: [ardelingga.dev](https://ardelingga.dev)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://radix-ui.com/) for accessible component primitives
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Class Variance Authority](https://cva.style/) for variant management
- [Storybook](https://storybook.js.org/) for component documentation

---

<div align="center">

⭐ **Star this repository if it helped you!** ⭐

Made with ❤️ and ☕ by [Ardelingga](https://github.com/ardelingga)

</div>
