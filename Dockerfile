FROM node:latest
WORKDIR /aatsan/my-App
COPY . .
RUN npm install
CMD ["npm", "start"]