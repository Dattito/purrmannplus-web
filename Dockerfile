FROM node:alpine as BUILD_IMAGE

WORKDIR /usr/local/app

COPY package.json package-lock.json ./

RUN npm install

COPY . /usr/local/app/

RUN npm run build --prod

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=BUILD_IMAGE /usr/local/app/dist/purrmannplus-web /usr/share/nginx/html

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

EXPOSE 80