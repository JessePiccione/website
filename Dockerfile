FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ENV GOOGLE_APPLICATION_CREDENTIALS='/app/adc.json'
ENTRYPOINT ["npm", "start"]