FROM alpine:3.13.2 as web-builder
WORKDIR /usr/src/rit-sse-website
RUN apk add nodejs yarn npm
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
ENV NODE_ENV production
COPY . .
RUN yarn build

FROM alpine:3.13.2
WORKDIR /app/frontend
RUN addgroup -g 1000 -S www-data \
    && adduser -u 1000 -D -S -G www-data www-data
RUN apk add nginx
COPY ./nginx/ /etc/nginx/
COPY --from=web-builder /usr/src/rit-sse-website/build ./
