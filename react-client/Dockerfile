
FROM node:latest as prodbuild
WORKDIR /app
EXPOSE 80
COPY package*.json ./
COPY build ./build


FROM nginx:latest
COPY --from=prodbuild /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
