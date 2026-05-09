FROM node:20.11.1-alpine as build
COPY .npmrc /root/.npmrc
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000
COPY . ./
RUN yarn build

# Production environment
FROM node:20.11.1-alpine as production
WORKDIR /app
COPY --from=build /app .
RUN yarn install --production --network-timeout 1000000
EXPOSE 3000
CMD ["yarn", "start"]
