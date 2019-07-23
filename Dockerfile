FROM node:10-alpine
RUN apk add --update alpine-sdk
COPY package*.json ./
COPY test.js ./
RUN npm config set tmp /tmp
RUN npm install --no-package-lock --save
CMD [ "node", "test.js" ]