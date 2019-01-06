FROM node:8-slim

ENV KARMA_BROWSER PhantomJS

WORKDIR /reactapp

ADD package.json package.json
RUN npm install
ADD . .

VOLUME /reactapp

EXPOSE 3000

CMD ["npm", "run", "start:production"]
