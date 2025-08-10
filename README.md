# React + Vite + TypeScript Template

Modern React application template with TypeScript, built following [Feature-Sliced Design](https://feature-sliced.design/) architecture with best practices and ready-to-use tools.

## 🚀 Tech Stack

### Core Technologies
- **[React](https://react.dev/)** - Modern library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[Vite](https://vite.dev/)** - Fast build tool and dev server

### Styling System
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Ready-to-use components with modern design
- **[Radix UI](https://radix-ui.com/)** - Accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Modern SVG icons

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Additional UI Libraries
- **[Recharts](https://recharts.org/)** - Charts library for React
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme system
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[Date-fns](https://date-fns.org/)** - Date utility library

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Lint-staged](https://github.com/lint-staged/lint-staged)** - Run checks on staged files

## 📁 Project Architecture (FSD)

The project follows **[Feature-Sliced Design](https://feature-sliced.design/)** - an architectural methodology for frontend projects:

```
src/
├── shared/          # 🔧 Reusable resources
│   ├── ui/          # UI components
│   ├── lib/         # Utilities and hooks  
│   └── api/         # API methods
├── entities/        # 📦 Business entities
├── features/        # 🎯 User scenarios
├── widgets/         # 🧩 Composite UI blocks
├── pages/           # 📄 Application pages
└── app/             # ⚙️ App initialization
```

### Path Aliases
- `@/*` - src directory root


## 🚦 Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production  
npm run preview      # Preview build

# Code Quality
npm run lint:format  # Format code
npm run lint:fix     # Fix linting errors
npm run lint:check   # Full check and fix
```

## 🛠️ Quick Start

1. **Install dependencies**
```bash
npm install
```

2. **Start development**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:5173
```

## 🎯 Features

### 🔥 Performance
- Lightning-fast HMR with Vite
- SWC for fast React compilation
- Optimized production builds

### 🛡️ Type Safety
- Strict TypeScript configuration
- Runtime validation with Zod  
- Type-safe forms

### ♿ Accessibility
- ARIA attributes out of the box
- Keyboard navigation
- Screen reader support

### 🎨 Modern DX
- Tailwind CSS IntelliSense
- Ready-to-use component variants
- Automatic code formatting

## 📦 Adding Components

### Shadcn/ui Components
```bash
npx shadcn@latest add button
npx shadcn@latest add form
```

### Custom Components
Follow FSD principles - place components in appropriate layers:
- `shared/ui` - reusable UI components
- `entities/*/ui` - entity-specific components  
- `features/*/ui` - feature components

## 📚 Useful Links

- [Feature-Sliced Design](https://feature-sliced.design/) - architecture methodology
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - styling documentation
- [Radix UI Primitives](https://radix-ui.com/primitives) - accessible components
- [React Hook Form Guide](https://react-hook-form.com/get-started) - forms handling
- [Zod Documentation](https://zod.dev/) - validation schemas

This template provides scalable architecture and excellent developer experience for building modern React applications!