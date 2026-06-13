# =====================================
# Stage 1 - Build Angular application
# =====================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build production application
RUN npm run build


# =====================================
# Stage 2 - Nginx web server
# =====================================
FROM nginx:alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build
COPY --from=builder /app/dist/aishware-tech/browser /usr/share/nginx/html

# Custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]