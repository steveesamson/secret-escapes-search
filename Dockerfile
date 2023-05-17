FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY ./ ./
RUN npm i
RUN npm i -g serve
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build", "-p", "3000"]
