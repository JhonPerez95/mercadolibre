FROM node:18-alpine3.15 AS build

WORKDIR /app

COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]