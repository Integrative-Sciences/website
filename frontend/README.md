# Integrative Science - Frontend

Next.js-based web application for the Integrative Science journal platform.

## Tech Stack

- **Framework**: Next.js 16.0.10 with App Router
- **Runtime**: Bun 1.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: React Icons

## Development

### Using Docker (Recommended)

```bash
# From the root directory
cd ..
docker-compose up frontend
```

The application will be available at http://localhost:3000

### Local Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Type check
bun run typecheck

# Lint
bun run lint

# Build for production
bun run build

# Start production server
bun start
```

## Project Structure

```
.
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── api/             # API routes
│   └── journal/         # Journal pages
├── components/           # React components
│   ├── ui/              # UI components
│   └── ...              # Feature components
├── lib/                 # Utilities and data
├── types/               # TypeScript types
├── assets/              # Static assets
└── public/              # Public static files
```

## Journals

The platform hosts multiple academic journals covering various interdisciplinary topics:
- Systems Biology
- Quantum Consciousness Studies
- Ecological Economics & Social Well-being
- And more...

See the home page for the full list.

## Docker

The application includes:
- `Dockerfile` for production builds
- `docker-compose.yml` for local development
- Turbopack-enabled development server

## CI/CD

GitHub Actions workflow validates:
- Type checking
- Linting
- Production build

On build failure, the workflow automatically rolls back the commit.
