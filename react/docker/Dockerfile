FROM node:14

ARG BUILD
ARG VERSION

RUN apt-get update -y && \
    rm -rf /var/www/html/* && mkdir -p /var/www/html/ && \
    rm -rf /var/lib/apt/lists/*

COPY ./ /var/www/html/

WORKDIR /var/www/html
RUN npm run init && \
    echo "APP_VERSION=${VERSION}" > .env && \
    npm run build:production && \
    echo "${VERSION}" > .version && \
    rm -rf @types client lib docker etc scripts server webpack www certs configs

CMD ["/usr/bin/supervisord"]
