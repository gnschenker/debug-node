FROM node:4.2.3
# for testing purposes
RUN npm install -g jasmine-node
RUN mkdir /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
EXPOSE 3000 5858
ENTRYPOINT ["npm", "start"]