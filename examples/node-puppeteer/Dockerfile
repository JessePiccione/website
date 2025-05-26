FROM node:20
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY index.js ./
CMD ["node", "index.js"]
