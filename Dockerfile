FROM node
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
