# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React UI Components

Portfolio showcase untuk komponen UI modern yang dibangun dengan React, TailwindCSS, dan Storybook.

## 🚀 Technology Stack

- **React 18** - Modern React dengan Hooks
- **TypeScript** - Type safety dan better developer experience
- **TailwindCSS** - Utility-first CSS framework
- **Storybook** - Component documentation dan testing
- **Vite** - Fast build tool dan development server

## 📦 Components

### Button Component
Modern button component dengan multiple variants dan states:

- **Variants**: `primary`, `secondary`, `outline`, `ghost`, `destructive`
- **Sizes**: `sm`, `md`, `lg`, `xl`
- **States**: `disabled`, `loading`
- **Features**: Hover effects, focus states, loading spinner

### Card Component
Versatile card component dengan layout yang fleksibel:

- **Variants**: `default`, `outlined`, `elevated`, `filled`
- **Padding**: `none`, `sm`, `md`, `lg`, `xl`
- **Features**: Hoverable, clickable, compound components
- **Sub-components**: `Card.Header`, `Card.Content`, `Card.Footer`

## 🛠️ Development

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Installation
```bash
# Clone repository
git clone https://github.com/ardelingga/react-ui-components.git
cd react-ui-components

# Install dependencies
npm install
```

### Development Commands
```bash
# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📖 Storybook

Akses dokumentasi lengkap dan interactive playground di Storybook:

```bash
npm run storybook
```

Buka browser di `http://localhost:6006` untuk melihat:
- Semua component variants
- Interactive controls
- Documentation dan props
- Usage examples

## 🎨 Design System

### Color Palette
- **Primary**: Blue (`bg-blue-600`, `hover:bg-blue-700`)
- **Secondary**: Gray (`bg-gray-100`, `hover:bg-gray-200`)
- **Destructive**: Red (`bg-red-600`, `hover:bg-red-700`)

### Typography
- **Font Family**: System fonts (sans-serif)
- **Font Weights**: Normal (400), Medium (500), Semibold (600), Bold (700)

### Spacing
- **Small**: `0.75rem` (12px)
- **Medium**: `1rem` (16px)
- **Large**: `1.5rem` (24px)
- **Extra Large**: `2rem` (32px)

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.stories.tsx
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.stories.tsx
│   └── index.ts
├── App.tsx
└── main.tsx
```

## 💡 Usage Examples

### Button Component
```tsx
import { Button } from './components';

// Basic usage
<Button variant="primary" size="md">
  Click me
</Button>

// With loading state
<Button variant="primary" loading>
  Processing...
</Button>

// With icon
<Button variant="outline">
  <Icon />
  Save File
</Button>
```

### Card Component
```tsx
import { Card } from './components';

// Basic card
<Card variant="outlined">
  <p>Simple card content</p>
</Card>

// Complex card with sections
<Card variant="elevated" hoverable>
  <Card.Header>
    <h3>Card Title</h3>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

## 🎯 Features

- ✅ **Type Safe** - Full TypeScript support
- ✅ **Responsive** - Mobile-first design
- ✅ **Accessible** - ARIA compliant
- ✅ **Customizable** - Easy to extend dan customize
- ✅ **Well Documented** - Comprehensive Storybook docs
- ✅ **Modern** - Latest React patterns dan hooks
- ✅ **Performance** - Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build project
npm run build

# Upload dist/ folder to Netlify
```

## 📈 Roadmap

- [ ] Form components (Input, Select, Checkbox, Radio)
- [ ] Modal dan Dialog components
- [ ] Table component dengan sorting dan filtering
- [ ] Toast notification system
- [ ] Dark mode support
- [ ] Animation dan transitions
- [ ] Unit testing dengan Jest
- [ ] E2E testing dengan Playwright

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ardelingga Pramesta Kusuma**
- GitHub: [@ardelingga](https://github.com/ardelingga)
- LinkedIn: [Your LinkedIn Profile]

---

⭐ Star this repository jika berguna untuk project Anda!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
