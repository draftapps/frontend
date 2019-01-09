FROM node:lts-alpine

WORKDIR /draftapp_fe

ADD package.json package.json
RUN npm install
ADD . .

VOLUME /draftapp_fe

EXPOSE 3000

CMD ["npm", "run", "start:production"]
