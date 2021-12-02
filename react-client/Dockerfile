
FROM node:latest as prodbuild
WORKDIR /app
EXPOSE 8081
COPY package*.json ./
COPY build ./
RUN npm install
RUN npm install -g serve
RUN serve -l 8081 -s build


FROM nginx:latest
COPY --from= prodbuild /app/build /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]