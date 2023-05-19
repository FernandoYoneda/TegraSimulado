# Preparing new artifact version
FROM node:18-alpine3.16 as builder

WORKDIR /home/node/artifact
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

# Running artifact
FROM builder as production

WORKDIR /home/node/service
COPY --from=builder /home/node/artifact .
EXPOSE 5000
CMD [ "npm", "start" ]
