FROM node:lts-alpine

WORKDIR /draftapp_fe

ADD package.json package.json
RUN yarn install
ADD . .

VOLUME /draftapp_fe

EXPOSE 3000

CMD ["yarn", "run", "start:production"]
