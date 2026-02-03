# Kora AI - Continuous AML Assurance & Remediation

## About

Kora AI is an autonomous AML RegOps layer for banks and fintechs with serious BSA/AML obligations. We provide continuous evidence collection, automated control checks, cross-system reconciliation, and remediation tracking for BSA/AML compliance.

**Website**: https://hey-kora.com

## Features

- **Evidence Graph**: Real-time system of record linking obligations → controls → systems → checks → evidence
- **Control Checks**: Executable assurance with automated SQL/Python checks in a locked-down sandbox
- **Reconciliation**: Automated cross-system reconciliation across core, AML, case management, KYC, and data warehouse
- **Remediation**: Drive exceptions to closure with proof-of-fix packages and continuous re-testing

## Tech Stack

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd kora-compliance-main

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/
│   ├── landing/       # Landing page sections (Hero, Features, Footer, etc.)
│   └── ui/            # Reusable UI components (shadcn/ui)
├── pages/             # Route pages
│   ├── Index.tsx      # Home page
│   ├── EvidenceGraph.tsx
│   ├── ControlChecks.tsx
│   ├── Reconciliation.tsx
│   └── Remediation.tsx
└── App.tsx            # Main app with routing
```

## Deployment

This application can be deployed to any static hosting service:

- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Deploy with continuous deployment from Git
- **AWS S3 + CloudFront**: Host as static website
- **GitHub Pages**: Deploy from repository

### Build for Production

```sh
npm run build
```

The production-ready files will be in the `dist/` directory.

## Contact

For inquiries about Kora AI:
- Email: tanzil@hey-kora.com
- Website: https://hey-kora.com

---

© 2026 Kora AI. All rights reserved.
