FROM node:18 as frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY ./ ./
RUN npm run build-only

FROM nginx:stable
COPY --from=frontend /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
