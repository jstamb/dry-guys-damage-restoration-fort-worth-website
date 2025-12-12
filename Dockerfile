# Production-ready static site container
FROM nginx:alpine

# Copy all static files to nginx html directory
COPY . /usr/share/nginx/html

# Copy nginx config for Cloud Run (port 8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run requires port 8080
ENV PORT=8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]