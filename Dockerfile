FROM nginx:alpine

COPY ./misc/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY /src /usr/share/nginx/html
