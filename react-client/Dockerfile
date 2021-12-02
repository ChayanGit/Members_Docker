
FROM node:latest as prodbuild
WORKDIR /app
EXPOSE 8081
COPY package*.json ./
COPY build ./

FROM nginx:latest
COPY --from= prodbuild /app/build /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]