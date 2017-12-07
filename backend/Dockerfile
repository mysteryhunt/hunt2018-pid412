# Stage 0: install dependencies and babelify
FROM node:8.5.0-slim

# Install git (so we can install git-based dependencies)
RUN apt-get update && apt-get install --yes git

# Set up the /app dir
RUN mkdir /app
WORKDIR /app

# Install dependencies
ADD package.json /app
ADD yarn.lock /app
RUN yarn install --production

# Add code
ADD src /app/src

# Run
CMD node /app/src/index.js
