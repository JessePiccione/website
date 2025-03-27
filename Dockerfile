FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run sass
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "start"]