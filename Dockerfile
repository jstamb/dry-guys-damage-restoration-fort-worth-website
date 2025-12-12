# Build stage - compile React/Vite app
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source files
COPY . .

# Build the Vite app
RUN npm run build

# Production stage - serve built files with nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config for Cloud Run (port 8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run requires port 8080
ENV PORT=8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]