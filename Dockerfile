# Production: `docker build -t dominion-web .` → nginx on port 80.
# Coolify: Dockerfile deploy, publish port 80, optional health path GET /health
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN apk add --no-cache --virtual .build-deps build-base autoconf automake libtool pkgconf python3 make && \
  npm ci && \
  apk del .build-deps
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/health || exit 1
