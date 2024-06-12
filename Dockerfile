FROM node:latest
WORKDIR /aatsan/my-App
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
