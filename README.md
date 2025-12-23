# Integrative Science Platform

A multi-project repository for the Integrative Science journal platform.

## Projects

### Frontend
Next.js-based web application for the journal platform.

See [frontend/README.md](frontend/README.md) for details.

### Backend
Strapi CMS for content management.

See [backend/README.md](backend/README.md) for details.

## Development

Run all projects using Docker from the root:

```bash
# Start all services
docker-compose up

# Start specific service
docker-compose up frontend
```

## Project Structure

```
.
├── frontend/          # Next.js web application
├── backend/           # Strapi CMS
├── .github/          # CI/CD workflows
└── README.md         # This file
```
