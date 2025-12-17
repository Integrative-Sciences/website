# Multi-stage Dockerfile for Next.js with Bun
# Optimized for Coolify deployment

# Stage 1: Dependencies
FROM oven/bun:latest AS deps
WORKDIR /app

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install

# Stage 2: Builder
FROM oven/bun:1 AS builder
WORKDIR /app

# Install Node.js for Next.js build (Bun Turbopack issue still not fully resolved)
RUN apt-get update && apt-get install -y nodejs && rm -rf /var/lib/apt/lists/*

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build Next.js application (uses Node.js internally via Bun)
RUN bun run build

# Stage 3: Runner (Production)
FROM oven/bun:1-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user for security
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 --gid nodejs nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD bun run -e 'fetch("http://localhost:3000").then(() => process.exit(0)).catch(() => process.exit(1))'

# Start Next.js server
CMD ["bun", "run", "server.js"]
