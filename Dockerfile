FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN npm i
RUN npm i -g serve
EXPOSE 3000
CMD ["npm", "run", "build"]
CMD ["serve", "-s", "build", "-p", "3000"]
